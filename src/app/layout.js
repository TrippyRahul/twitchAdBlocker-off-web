import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "twitch Ad Blocker",
  description: "Enjoy the ultimate watching experience with twitch ad blocker.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.twitchadblocker.net/" />

        <meta property="og:url" content="https://www.twitchadblocker.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="twitch Ad Blocker" />
        <meta
          property="og:description"
          content="Enhance your twitch experience with Twitch Ad blocker"
        />
        <meta
          property="og:image"
          content="https://www.twitchadblocker.net/favicon.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="twitchadblocker.net" />
        <meta
          property="twitter:url"
          content="https://www.twitchadblocker.net/"
        />
        <meta name="twitter:title" content="twitch Ad Blocker" />
        <meta
          name="twitter:description"
          content="Enhance your twitch experience with Twitch Ad blocker"
        />
        <meta
          name="twitter:image"
          content="https://www.twitchadblocker.net/favicon.svg"
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
