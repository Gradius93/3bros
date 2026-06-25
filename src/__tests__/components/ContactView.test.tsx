import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import ContactView from "@/components/views/ContactView";

async function fillForm(
  user: ReturnType<typeof userEvent.setup>,
  scope: ReturnType<typeof within>
) {
  await user.type(scope.getByPlaceholderText("Your full name"), "Joe");
  await user.type(scope.getByPlaceholderText("you@example.com"), "joe@test.com");
  await user.type(scope.getByPlaceholderText("How can we help?"), "Hello");
  await user.type(scope.getByPlaceholderText("Write your message"), "Hi there");
}

describe("ContactView", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the form fields", () => {
    const { container } = render(<ContactView />);
    const scope = within(container);
    expect(scope.getByPlaceholderText("Your full name")).toBeInTheDocument();
    expect(scope.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(scope.getByPlaceholderText("How can we help?")).toBeInTheDocument();
    expect(scope.getByPlaceholderText("Write your message")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    const { container } = render(<ContactView />);
    expect(within(container).getByRole("button", { name: "Send Message" })).toBeInTheDocument();
  });

  it("renders direct email link", () => {
    const { container } = render(<ContactView />);
    const link = within(container).getByRole("link", { name: /3brosfood@gmail.com/i });
    expect(link).toHaveAttribute("href", "mailto:3brosfood@gmail.com");
  });

  it("shows success message on successful submission", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ message: "sent" }), { status: 200 })
    );
    const user = userEvent.setup();
    const { container } = render(<ContactView />);
    const scope = within(container);

    await fillForm(user, scope);
    await user.click(scope.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(scope.getByText(/message has been sent/i)).toBeInTheDocument();
    });
  });

  it("shows error message on failed submission", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ message: "Server error" }), { status: 500 })
    );
    const user = userEvent.setup();
    const { container } = render(<ContactView />);
    const scope = within(container);

    await fillForm(user, scope);
    await user.click(scope.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(scope.getByRole("alert")).toBeInTheDocument();
    });
  });

  it("shows error message on network failure", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("network"));
    const user = userEvent.setup();
    const { container } = render(<ContactView />);
    const scope = within(container);

    await fillForm(user, scope);
    await user.click(scope.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(scope.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it("disables button while submitting", async () => {
    let resolveFetch: (v: Response) => void;
    vi.spyOn(globalThis, "fetch").mockReturnValueOnce(
      new Promise((r) => {
        resolveFetch = r;
      })
    );
    const user = userEvent.setup();
    const { container } = render(<ContactView />);
    const scope = within(container);

    await fillForm(user, scope);
    await user.click(scope.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(scope.getByRole("button", { name: "Sending..." })).toBeDisabled();
    });

    resolveFetch!(new Response(JSON.stringify({ message: "ok" }), { status: 200 }));
  });
});
