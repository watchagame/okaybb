import Head from 'next/head';
import hi from './hi.png';

export default function SEO({ title, description, hi }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.okaybasketball.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhi.0c4f657d.png"
      />
    </Head>
  );
}
