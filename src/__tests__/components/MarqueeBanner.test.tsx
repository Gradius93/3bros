import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MarqueeBanner from "@/components/MarqueeBanner";

describe("MarqueeBanner", () => {
  it("renders with default text", () => {
    render(<MarqueeBanner />);
    const section = screen.getByLabelText("Farmed For Flavour");
    expect(section).toBeInTheDocument();
  });

  it("renders with custom text", () => {
    render(<MarqueeBanner text="Sussex Wagyu" />);
    const section = screen.getByLabelText("Sussex Wagyu");
    expect(section).toBeInTheDocument();
  });

  it("renders duplicated items for infinite scroll effect", () => {
    const { container } = render(<MarqueeBanner text="Test" />);
    const spans = container.querySelectorAll("span");
    const textSpans = Array.from(spans).filter(
      (s) => s.textContent === "Test"
    );
    expect(textSpans.length).toBe(24); // BANNER_ITEMS * 2
  });

  it("marks the scrolling track as aria-hidden", () => {
    const { container } = render(<MarqueeBanner />);
    const track = container.querySelector('[aria-hidden="true"]');
    expect(track).toBeInTheDocument();
  });
});
