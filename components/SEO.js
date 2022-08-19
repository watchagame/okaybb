import Head from 'next/head';

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:image"
        content="https://www.okaybasketball.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhi.0c4f657d.png&w=3840&q=75"
      />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:name" content="okaybasketball" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.okaybasketball.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhi.0c4f657d.png&w=3840&q=75"
      />
    </Head>
  );
}
