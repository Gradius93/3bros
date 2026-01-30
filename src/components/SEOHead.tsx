import Head from "next/head";

interface SEOHeadProps {
  readonly title: string;
  readonly description: string;
  readonly canonical: string;
  readonly keywords?: string;
  readonly ogImage?: string;
  readonly structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogImage = "/images/3bros_logo.png",
  structuredData,
}: SEOHeadProps) {
  const siteUrl = "https://3bros.co.uk"; // Update with actual domain when deployed
  const fullUrl = `${siteUrl}${canonical}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

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
