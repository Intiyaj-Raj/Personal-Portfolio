import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Intiyaj Ansari – Full Stack Developer | Mr. Engineer Web Apps',
  description = 'Intiyaj Ansari full stack developer, also known as Mr. Engineer, who creates secure, scalable, and easy-to-use web apps. Hire a skilled full stack developer.',
  keywords = 'full stack developer, frontend developer, backend developer, web app developer, Mr. Engineer full stack developer, Intiyaj Ansari full stack developer, best full stack developer',
  image = 'https://intiyajansarifullstackdeveloper.netlify.app/full-stack-developer-intiyaj-og.png',
  url = 'https://intiyajansarifullstackdeveloper.netlify.app',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Intiyaj',
    jobTitle: 'Full Stack Developer',
    description: 'Intiyaj Ansari is also known as Mr. Engineer, is a full stack developer. He builds secure, scalable, and user-friendly web applications.',
    url: url,
    image: image,
    sameAs: [
      "https://github.com/Intiyaj-Raj",
      "https://www.linkedin.com/in/intiyaj-ansari/",
      "https://x.com/intiyaj_91",
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Web Development',
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Intiyaj Ansari" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#00ff41" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Intiyaj Portfolio" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@intiyaj" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;