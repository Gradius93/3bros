import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MenuView from "@/components/views/MenuView";
import { menuItems } from "@/data/menu";
import { locations } from "@/data/locations";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

describe("MenuView", () => {
  it("renders the heading", () => {
    const { container } = render(<MenuView />);
    expect(within(container).getByText("Our Menu")).toBeInTheDocument();
  });

  it("renders All Locations button pressed by default", () => {
    const { container } = render(<MenuView />);
    const allBtn = within(container).getByRole("button", { name: "All Locations" });
    expect(allBtn).toHaveAttribute("aria-pressed", "true");
  });

  it("renders a location filter button for each location", () => {
    const { container } = render(<MenuView />);
    const scope = within(container);
    for (const loc of locations) {
      expect(scope.getByRole("button", { name: loc.name })).toBeInTheDocument();
    }
  });

  it("shows all menu items by default", () => {
    const { container } = render(<MenuView />);
    const scope = within(container);
    for (const item of menuItems) {
      expect(scope.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("filters items when a location is selected", async () => {
    const user = userEvent.setup();
    const { container } = render(<MenuView />);
    const scope = within(container);

    const brighton = locations.find((l) => l.name === "Brighton")!;
    await user.click(scope.getByRole("button", { name: "Brighton" }));

    const brightonItems = menuItems.filter((i) =>
      i.availableAt.includes(brighton.id)
    );
    const nonBrightonItems = menuItems.filter(
      (i) => !i.availableAt.includes(brighton.id)
    );

    for (const item of brightonItems) {
      expect(scope.getByText(item.name)).toBeInTheDocument();
    }
    for (const item of nonBrightonItems) {
      expect(scope.queryByText(item.name)).not.toBeInTheDocument();
    }
  });

  it("resets filter when All Locations is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<MenuView />);
    const scope = within(container);

    await user.click(scope.getByRole("button", { name: "Horsham" }));
    await user.click(scope.getByRole("button", { name: "All Locations" }));

    for (const item of menuItems) {
      expect(scope.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders category sections", () => {
    const { container } = render(<MenuView />);
    const scope = within(container);
    expect(scope.getByText("Burgers")).toBeInTheDocument();
    expect(scope.getByText("Fries & Sides")).toBeInTheDocument();
    expect(scope.getByText("Sauces")).toBeInTheDocument();
  });

  it("displays prices formatted to 2 decimal places", () => {
    const { container } = render(<MenuView />);
    const scope = within(container);
    const classic = menuItems.find((i) => i.name === "The Classic")!;
    const priceText = `£${classic.price.toFixed(2)}`;
    const prices = scope.getAllByText(priceText);
    expect(prices.length).toBeGreaterThan(0);
  });
});
