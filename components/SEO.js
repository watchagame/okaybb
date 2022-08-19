import Head from 'next/head';

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:name" content="okaybasketball" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/zDL7Rj01/logotest3.png"
      />
    </Head>
  );
}
