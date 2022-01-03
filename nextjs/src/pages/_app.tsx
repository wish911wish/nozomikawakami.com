import "styles/reset.css";
import "styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
