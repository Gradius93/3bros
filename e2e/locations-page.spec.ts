import { test, expect } from "@playwright/test";

test.describe("Locations page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/locations");
  });

  test("displays page heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Our Locations" })
    ).toBeVisible();
  });

  test("displays all three location cards", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Horsham" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Brighton" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Winchester" })
    ).toBeVisible();
  });

  test("clicking a location card opens a modal", async ({ page }) => {
    await page
      .getByRole("button", { name: /view details for horsham/i })
      .click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: "Horsham" })).toBeVisible();
    await expect(dialog.getByText("Address")).toBeVisible();
    await expect(dialog.getByText("Hours")).toBeVisible();
  });

  test("modal has Google Maps link", async ({ page }) => {
    await page
      .getByRole("button", { name: /view details for brighton/i })
      .click();

    const dialog = page.getByRole("dialog");
    const mapsLink = dialog.getByRole("link", { name: /google maps/i });
    await expect(mapsLink).toBeVisible();
    await expect(mapsLink).toHaveAttribute("href", /google\.com\/maps/);
  });

  test("modal closes on close button", async ({ page }) => {
    await page
      .getByRole("button", { name: /view details for horsham/i })
      .click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).not.toBeVisible();
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Locations/);
  });
});
