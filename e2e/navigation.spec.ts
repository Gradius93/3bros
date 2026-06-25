import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("desktop nav links scroll to sections", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    await page.getByRole("link", { name: "About Us" }).first().click();
    await expect(page.locator("#about-us")).toBeInViewport();

    await page.getByRole("link", { name: "Our Menu" }).first().click();
    await expect(page.locator("#our-menu")).toBeInViewport();

    await page.getByRole("link", { name: "Locations" }).first().click();
    await expect(page.locator("#locations")).toBeInViewport();
  });

  test("mobile hamburger menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const hamburger = page.getByRole("button", { name: "Open menu" });
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toBeVisible();

    // Use the ✕ close button inside the mobile menu overlay
    await mobileMenu.getByRole("button", { name: "Close menu" }).click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test("mobile menu links navigate and close menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    await page.getByRole("button", { name: "Open menu" }).click();

    const mobileMenu = page.locator("#mobile-menu");
    await mobileMenu.getByRole("link", { name: "Our Menu" }).click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test("skip to main content link is accessible", async ({ page }) => {
    const skipLink = page.getByText("Skip to main content");
    await expect(skipLink).toBeAttached();
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });
});
