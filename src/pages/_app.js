import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import "../styles/main.scss";
import { Provider } from "react-redux";
import store from "../reduxIntegration/store";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Xi Creatives - Creative Digital & Marketing Agency</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </Provider>
  );
}

export default MyApp;
