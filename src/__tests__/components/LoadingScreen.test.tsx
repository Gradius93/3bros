import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import LoadingScreen from "@/components/LoadingScreen";

vi.mock("next/image", () => ({
  default: ({ src, alt, ...rest }: Record<string, unknown>) => (
    <img src={src as string} alt={alt as string} {...rest} />
  ),
}));

describe("LoadingScreen", () => {
  it("renders with loading state", () => {
    render(<LoadingScreen isLoaded={false} />);
    const status = screen.getByRole("status");
    expect(status).toHaveAttribute("aria-busy", "true");
  });

  it("fades out when loaded", () => {
    render(<LoadingScreen isLoaded={true} />);
    const status = screen.getByRole("status");
    expect(status).toHaveAttribute("aria-busy", "false");
    expect(status.className).toContain("opacity-0");
    expect(status.className).toContain("pointer-events-none");
  });

  it("renders the logo image", () => {
    const { container } = render(<LoadingScreen isLoaded={false} />);
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img!.getAttribute("src")).toBe("/images/logo1.png");
  });
});
