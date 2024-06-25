// "use client"
import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import dynamic from "next/dynamic";

function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>{"Jiffy Scan "}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
