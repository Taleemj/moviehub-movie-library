import "./globals.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieHub2Day | Watch Movies free online | Watch series free online",
  description:
    "MovieHub2Day Free Access to the Biggest library of HD Movies and HD Series online - NO ADS - No Account Required - Fast Free streaming and downloads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="O_grUoAkNqBhd8JaaX1YpzQO4ti2Njc6w_Oul2kjNRQ" />
        <meta
          name="keywords"
          content="movies free,stream hd, download hd, hd movies Stream, watch movies free online ,download movies free, watch series online free,download series free, download movies online, download series online, free movies, free series"
        ></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script async id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
        </Script>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
        {/* <Script
          type="text/javascript"
          src="//pl22168955.toprevenuegate.com/40/14/ee/4014eed687ca3d15d7ade2968f394edb.js"
        ></Script> */}
      </body>
    </html>
  );
}
