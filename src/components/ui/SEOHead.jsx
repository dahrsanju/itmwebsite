import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../../data/siteData';

export default function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${companyInfo.name}` : `${companyInfo.name} - Creative Digital Marketing Agency`;
  const metaDesc = description || companyInfo.description;
  const canonicalUrl = canonical ? `${companyInfo.domain}${canonical}` : companyInfo.domain;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={companyInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
