import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageMeta = ({
  title = 'Jyodha Royal Brides',
  description = 'Jyodha Royal Brides — a premium Indian bridal studio offering HD makeup, skincare, spa, jewellery, and holistic bridal guidance.',
  ogImage = '/assets/logo/logo-jyodha.webp'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default PageMeta;
