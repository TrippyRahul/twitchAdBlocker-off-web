import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Functionality from "./components/functionality/Functionality";
import HowToAdd from "./components/howToAdd/HowToAdd";
import Footer from "./components/footer/Footer";

export const metadata = {
  title:
    " 不要な広告に別れを告げて、無制限のストリーミングをお楽しみください Twitch adblock.",
  description:
    "Twitch adblock は、広告なしで無制限のストリーミングができる最も素晴らしい拡張機能です。",
  openGraph: {
    title:
      " 不要な広告に別れを告げて、無制限のストリーミングをお楽しみください Twitch adblock.",
    description:
      "Twitch adblock は、広告なしで無制限のストリーミングができる最も素晴らしい拡張機能です。",
    url: "https://www.twitchadblocker.co/japanese",
    type: "website",
  },
};

export default function Home() {
  return (
    <html>
      <head>
        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/japanese"
          hrefLang="ja-jp"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/japanese"
          hrefLang="ja-us"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/japanese"
          hrefLang="ja-br"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/japanese"
          hrefLang="ja-kr"
        />
      </head>
      <body>
        <main>
          <Header />
          <Use />
          <InstallYoutubeAdsBlocker />
          <AboutYoutubeAdBlocker />
          <Footer />
        </main>
      </body>
    </html>
  );
}
