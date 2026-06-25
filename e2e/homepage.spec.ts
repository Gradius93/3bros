import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads and displays hero heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /sussex wagyu burgers/i })
    ).toBeVisible();
  });

  test("displays all main sections", async ({ page }) => {
    await expect(page.locator("#home")).toBeAttached();
    await expect(page.locator("#about-us")).toBeAttached();
    await expect(page.locator("#our-menu")).toBeAttached();
    await expect(page.locator("#locations")).toBeAttached();
    await expect(page.locator("#festivals")).toBeAttached();
  });

  test("renders navbar with logo", async ({ page }) => {
    await expect(page.getByRole("banner")).toBeVisible();
    const logos = page.getByAltText("3 Bros");
    await expect(logos.nth(0)).toBeAttached();
  });

  test("renders footer with email link", async ({ page }) => {
    await expect(
      page.getByRole("contentinfo").getByText("3brosfood@gmail.com")
    ).toBeVisible();
  });

  test("Browse our Menu button scrolls to menu section", async ({ page }) => {
    await page.getByRole("link", { name: /browse our menu/i }).click();
    await expect(page.locator("#our-menu")).toBeInViewport();
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/3Bros Burgers/);
  });

  test("has canonical link", async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /3bros\.co\.uk/);
  });

  test("has structured data", async ({ page }) => {
    const script = page.locator('script[type="application/ld+json"]');
    await expect(script).toBeAttached();
    const content = await script.innerHTML();
    const data = JSON.parse(content);
    expect(data["@context"]).toBe("https://schema.org");
  });
});
