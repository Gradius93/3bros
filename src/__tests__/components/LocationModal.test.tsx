import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LocationModal } from "@/components/modals/LocationModal";
import type { Location } from "@/types";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

const mockLocation: Location = {
  id: 1,
  name: "Brighton",
  description: "Test location",
  address: "King's Road Arches",
  city: "Brighton, BN1 1NB",
  hours: "Mon-Fri: 11:30am – close",
  image: "/images/test.jpg",
  mapsUrl: "https://maps.google.com/?q=test",
};

describe("LocationModal", () => {
  it("renders location name", () => {
    const { container } = render(
      <LocationModal location={mockLocation} onClose={vi.fn()} />
    );
    expect(within(container).getByText("Brighton")).toBeInTheDocument();
  });

  it("renders address and city", () => {
    const { container } = render(
      <LocationModal location={mockLocation} onClose={vi.fn()} />
    );
    const scope = within(container);
    expect(scope.getByText("King's Road Arches")).toBeInTheDocument();
    expect(scope.getByText("Brighton, BN1 1NB")).toBeInTheDocument();
  });

  it("renders hours", () => {
    const { container } = render(
      <LocationModal location={mockLocation} onClose={vi.fn()} />
    );
    expect(
      within(container).getByText("Mon-Fri: 11:30am – close")
    ).toBeInTheDocument();
  });

  it("renders Google Maps link", () => {
    const { container } = render(
      <LocationModal location={mockLocation} onClose={vi.fn()} />
    );
    const link = within(container).getByRole("link", { name: /google maps/i });
    expect(link).toHaveAttribute("href", mockLocation.mapsUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders phone when provided", () => {
    const locWithPhone = { ...mockLocation, phone: "01onal 123456" };
    const { container } = render(
      <LocationModal location={locWithPhone} onClose={vi.fn()} />
    );
    expect(within(container).getByText("01onal 123456")).toBeInTheDocument();
  });

  it("does not render phone section when absent", () => {
    const { container } = render(
      <LocationModal location={mockLocation} onClose={vi.fn()} />
    );
    expect(within(container).queryByText("Phone")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { container } = render(
      <LocationModal location={mockLocation} onClose={onClose} />
    );
    await user.click(within(container).getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(onClose).toHaveBeenCalledOnce();
    });
  });

  it("has dialog role with aria-modal", () => {
    render(<LocationModal location={mockLocation} onClose={vi.fn()} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });
});
