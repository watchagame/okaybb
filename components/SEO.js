import Head from 'next/head';

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:name" content="okaybasketball" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        property="twitter:image:src"
        content="https://github.com/watchagame/okaybb/blob/main/public/images/bball.png"
      />
    </Head>
  );
}
