import { describe, expect, it } from "vitest";
import { locations } from "@/data/locations";

describe("locations data", () => {
  it("has at least one location", () => {
    expect(locations.length).toBeGreaterThan(0);
  });

  it("each location has required fields", () => {
    for (const loc of locations) {
      expect(loc.id).toBeTypeOf("number");
      expect(loc.name).toBeTruthy();
      expect(loc.address).toBeTruthy();
      expect(loc.city).toBeTruthy();
      expect(loc.hours).toBeTruthy();
      expect(loc.image).toBeTruthy();
      expect(loc.mapsUrl).toContain("google.com/maps");
    }
  });

  it("has unique IDs", () => {
    const ids = locations.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("contains expected locations", () => {
    const names = locations.map((l) => l.name);
    expect(names).toContain("Brighton");
    expect(names).toContain("Horsham");
    expect(names).toContain("Winchester");
    expect(names).not.toContain("Chichester");
  });
});
