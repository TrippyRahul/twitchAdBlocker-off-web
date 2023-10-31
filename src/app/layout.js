import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";
import Script from "next/script";

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
        <meta
          name="google-site-verification"
          content="k0xb60xbns5DU13hU8JAAfkeWgy_6z_Cj5BkMJ3tVfs"
        />

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EKV5YDT8Z3" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EKV5YDT8Z3');
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Schema />
        {children}
      </body>
    </html>
  );
}
