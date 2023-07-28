import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enhance your twitch experience with Twitch Ad blocker",
  description:
    "Enjoy ad-free live streaming on Twitch with our trusted and free adblock extension. Interact with streamers in real-time without interruptions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.twitchadblocker.co/" />

        <meta property="og:url" content="https://www.twitchadblocker.co/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Enhance your twitch experience with Twitch Ad blocker"
        />
        <meta
          property="og:description"
          content="Enjoy ad-free live streaming on Twitch with our trusted and free adblock extension. Interact with streamers in real-time without interruptions."
        />
        <meta
          property="og:image"
          content="https://www.twitchadblocker.co/favicon.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="twitchadblocker.co" />
        <meta
          property="twitter:url"
          content="https://www.twitchadblocker.co/"
        />
        <meta
          name="twitter:title"
          content="Enhance your twitch experience with Twitch Ad blocker"
        />
        <meta
          name="twitter:description"
          content="Enjoy ad-free live streaming on Twitch with our trusted and free adblock extension. Interact with streamers in real-time without interruptions."
        />
        <meta
          name="twitter:image"
          content="https://www.twitchadblocker.co/favicon.svg"
        />
      </head>
      <body className={inter.className}>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
