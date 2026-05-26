import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="3Bros Burgers" />
      </Head>

      <div className={`${poppins.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
