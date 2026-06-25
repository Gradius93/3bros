import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SEOHead from "@/components/SEOHead";

vi.mock("next/head", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("SEOHead", () => {
  it("renders title element with correct text", () => {
    const { unmount } = render(
      <SEOHead
        title="Test Title"
        description="Test description"
        canonical="/test"
      />
    );
    const title = document.querySelector("title");
    expect(title?.textContent).toBe("Test Title");
    unmount();
  });

  it("renders meta description", () => {
    render(
      <SEOHead title="Title" description="My description" canonical="/" />
    );
    const meta = document.head.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBe("My description");
  });

  it("renders canonical URL with site prefix", () => {
    render(
      <SEOHead title="Title" description="Desc" canonical="/about" />
    );
    const link = document.head.querySelector('link[rel="canonical"]');
    expect(link?.getAttribute("href")).toBe("https://3bros.co.uk/about");
  });

  it("renders keywords when provided", () => {
    render(
      <SEOHead
        title="Title"
        description="Desc"
        canonical="/"
        keywords="burgers, wagyu"
      />
    );
    const meta = document.head.querySelector('meta[name="keywords"]');
    expect(meta?.getAttribute("content")).toBe("burgers, wagyu");
  });

  it("does not render keywords when omitted", () => {
    render(<SEOHead title="Title" description="Desc" canonical="/" />);
    const meta = document.head.querySelector('meta[name="keywords"]');
    expect(meta).toBeNull();
  });

  it("renders OG tags", () => {
    render(
      <SEOHead title="OG Title" description="OG Desc" canonical="/page" />
    );
    expect(
      document.head.querySelector('meta[property="og:title"]')?.getAttribute("content")
    ).toBe("OG Title");
    expect(
      document.head.querySelector('meta[property="og:description"]')?.getAttribute("content")
    ).toBe("OG Desc");
    expect(
      document.head.querySelector('meta[property="og:url"]')?.getAttribute("content")
    ).toBe("https://3bros.co.uk/page");
  });

  it("renders structured data when provided", () => {
    const data = { "@context": "https://schema.org", "@type": "Restaurant" };
    render(
      <SEOHead
        title="Title"
        description="Desc"
        canonical="/"
        structuredData={data}
      />
    );
    const script =
      document.head.querySelector('script[type="application/ld+json"]') ??
      document.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    expect(JSON.parse(script!.innerHTML)).toEqual(data);
  });

  it("uses default OG image when none provided", () => {
    render(<SEOHead title="Title" description="Desc" canonical="/" />);
    const ogImage = document.head
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");
    expect(ogImage).toBe(
      "https://3bros.co.uk/images/3bros_desktop_safe_1920x1080.png"
    );
  });

  it("uses absolute OG image URL as-is", () => {
    render(
      <SEOHead
        title="Title"
        description="Desc"
        canonical="/"
        ogImage="https://cdn.example.com/img.png"
      />
    );
    const ogImage = document.head
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");
    expect(ogImage).toBe("https://cdn.example.com/img.png");
  });
});
