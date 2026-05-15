import Head from "next/head";

interface SEOHeadProps {
  readonly title: string;
  readonly description: string;
  readonly canonical: string;
  readonly keywords?: string;
  readonly ogImage?: string;
  readonly structuredData?: object;
}

const SITE_URL = "https://3bros.co.uk";
const SITE_NAME = "3Bros Burgers";

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogImage = "/images/3bros_desktop_safe_1920x1080.png",
  structuredData,
}: SEOHeadProps) {
  const fullUrl = `${SITE_URL}${canonical}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <link rel="icon" href="/images/logo_dark.png" type="image/png" />
      <link rel="apple-touch-icon" href="/images/logo1.png" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@3brosmunch" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
