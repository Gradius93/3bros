import { describe, expect, it } from "vitest";
import { menuItems } from "@/data/menu";

describe("menu data", () => {
  it("has at least one item", () => {
    expect(menuItems.length).toBeGreaterThan(0);
  });

  it("each item has required fields", () => {
    for (const item of menuItems) {
      expect(item.id).toBeTypeOf("number");
      expect(item.name).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(["burger", "fries/sides", "sauces"]).toContain(item.category);
      expect(item.availableAt.length).toBeGreaterThan(0);
    }
  });

  it("has unique IDs", () => {
    const ids = menuItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("each availableAt entry is a positive integer", () => {
    for (const item of menuItems) {
      for (const locId of item.availableAt) {
        expect(locId).toBeTypeOf("number");
        expect(locId).toBeGreaterThan(0);
      }
    }
  });

  it("has items in each category", () => {
    const categories = new Set(menuItems.map((i) => i.category));
    expect(categories).toContain("burger");
    expect(categories).toContain("fries/sides");
    expect(categories).toContain("sauces");
  });
});
