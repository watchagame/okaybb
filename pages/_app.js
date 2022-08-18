import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Navbar } from '../components/Navbar';

const defaults = {
  title: ``,
  description: ``,
  image: ``,
  url: ``,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title || defaults.title}</title>
        <meta
          name="description"
          content={pageProps.description || defaults.description}
        />

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta itemprop="name" content={pageProps.title || defaults.title} />
        <meta
          itemprop="description"
          content={pageProps.description || defaults.description}
        />
        <meta itemprop="image" content={pageProps.image || defaults.image} />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:title" content={pageProps.title || defaults.title} />
        <meta
          property="og:description"
          content={pageProps.description || defaults.description}
        />
        <meta property="og:image" content={pageProps.image || defaults.image} />
        <meta property="og:url" content={pageProps.title || defaults.title} />
        <meta property="og:type" content="website" />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta
          name="twitter:title"
          content={pageProps.title || defaults.title}
        />
        <meta
          name="twitter:description"
          content={pageProps.description || defaults.description}
        />
        <meta
          name="twitter:image"
          content={pageProps.image || defaults.image}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
