import { test, expect } from "@playwright/test";

test.describe("Menu section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#our-menu").scrollIntoViewIfNeeded();
  });

  const filterGroup = (page: import("@playwright/test").Page) =>
    page.getByRole("group", { name: "Filter menu by location" });

  test("shows all menu categories", async ({ page }) => {
    await expect(page.getByText("Burgers").first()).toBeVisible();
    await expect(page.getByText("Fries & Sides")).toBeVisible();
    await expect(page.getByText("Sauces")).toBeVisible();
  });

  test("All Locations filter is active by default", async ({ page }) => {
    const allBtn = filterGroup(page).getByRole("button", {
      name: "All Locations",
    });
    await expect(allBtn).toHaveAttribute("aria-pressed", "true");
  });

  test("filtering by location updates visible items", async ({ page }) => {
    const horshamBtn = filterGroup(page).getByRole("button", {
      name: "Horsham",
    });
    await horshamBtn.click();
    await expect(horshamBtn).toHaveAttribute("aria-pressed", "true");

    await expect(page.getByText("Truffle Parmesan & Fries")).not.toBeVisible();
    await expect(page.getByText("The Classic")).toBeVisible();
  });

  test("clicking All Locations resets the filter", async ({ page }) => {
    const group = filterGroup(page);
    await group.getByRole("button", { name: "Brighton" }).click();
    await group.getByRole("button", { name: "All Locations" }).click();

    await expect(
      group.getByRole("button", { name: "All Locations" })
    ).toHaveAttribute("aria-pressed", "true");
  });
});
