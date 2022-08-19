import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <body
          className={`antialiased text-lg dark:bg-gray-900 dark:text-white leading-base`}
        >
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
