import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Navbar from "@/components/layout/Navbar";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

describe("Navbar", () => {
  it("renders desktop nav links", () => {
    const { container } = render(<Navbar />);
    const scope = within(container);
    expect(scope.getAllByText("About Us").length).toBeGreaterThan(0);
    expect(scope.getAllByText("Our Menu").length).toBeGreaterThan(0);
    expect(scope.getAllByText("Locations").length).toBeGreaterThan(0);
    expect(scope.getAllByText("Festivals").length).toBeGreaterThan(0);
  });

  it("renders skip to main content link", () => {
    const { container } = render(<Navbar />);
    const scope = within(container);
    const skipLink = scope.getByText("Skip to main content");
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders hamburger button for mobile", () => {
    const { container } = render(<Navbar />);
    const scope = within(container);
    const hamburger = scope.getByRole("button", { name: /open menu/i });
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles mobile menu on hamburger click", async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar />);
    const scope = within(container);
    const hamburger = scope.getByRole("button", { name: /open menu/i });
    await user.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
  });

  it("mobile menu has dialog role", () => {
    const { container } = render(<Navbar />);
    const scope = within(container);
    const mobileMenu = scope.getByRole("dialog", { hidden: true });
    expect(mobileMenu).toHaveAttribute("aria-modal", "true");
  });

  it("renders logo images", () => {
    const { container } = render(<Navbar />);
    const scope = within(container);
    const logos = scope.getAllByAltText("3 Bros");
    expect(logos.length).toBeGreaterThan(0);
  });
});
