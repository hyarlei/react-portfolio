import { Helmet } from 'react-helmet';
import { AppConfig } from '../config/appConfig';

/**
 * Componente SEO para gerenciar metadados e tags de SEO
 * Necessita instalar: npm install react-helmet
 */
const SEO = ({ title, description, keywords }) => {
  const metaTitle = title || AppConfig.siteMetadata.title;
  const metaDescription = description || AppConfig.siteMetadata.description;
  const metaKeywords = keywords || AppConfig.siteMetadata.keywords;

  return (
    <Helmet>
      {/* Meta tags básicas */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={AppConfig.siteMetadata.siteUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${AppConfig.siteMetadata.siteUrl}/og-image.jpg`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={AppConfig.siteMetadata.siteUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${AppConfig.siteMetadata.siteUrl}/twitter-image.jpg`} />
    </Helmet>
  );
};

export default SEO;
