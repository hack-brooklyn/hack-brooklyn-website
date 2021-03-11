import Head from 'next/head';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Hack Brooklyn" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hackbrooklyn.org/logo2048.png" />
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Brooklyn College's first-ever hackathon!"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Hack Brooklyn</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
