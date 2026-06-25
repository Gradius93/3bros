import { render, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "@/components/layout/Footer";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

describe("Footer", () => {
  it("renders footer navigation links", () => {
    const { container } = render(<Footer />);
    const scope = within(container);
    expect(scope.getByText("About Us")).toBeInTheDocument();
    expect(scope.getByText("Our Menu")).toBeInTheDocument();
    expect(scope.getByText("Locations")).toBeInTheDocument();
    expect(scope.getByText("Festivals")).toBeInTheDocument();
  });

  it("renders email link", () => {
    const { container } = render(<Footer />);
    const scope = within(container);
    const emailLink = scope.getByRole("link", { name: /3brosfood@gmail.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:3brosfood@gmail.com");
  });

  it("renders Instagram link", () => {
    const { container } = render(<Footer />);
    const scope = within(container);
    const igLink = scope.getByRole("link", { name: /@3brosmunch/i });
    expect(igLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/3brosmunch/"
    );
    expect(igLink).toHaveAttribute("target", "_blank");
  });

  it("renders copyright with current year", () => {
    const { container } = render(<Footer />);
    const scope = within(container);
    const year = new Date().getFullYear().toString();
    expect(scope.getByText(new RegExp(`© 3Bros Burgers ${year}`))).toBeInTheDocument();
  });

  it("has footer navigation landmark", () => {
    const { container } = render(<Footer />);
    const scope = within(container);
    expect(scope.getByRole("navigation", { name: /footer/i })).toBeInTheDocument();
  });
});
