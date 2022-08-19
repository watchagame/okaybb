import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
