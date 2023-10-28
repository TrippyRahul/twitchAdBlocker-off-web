import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Functionality from "./components/functionality/Functionality";
import HowToAdd from "./components/howToAdd/HowToAdd";

export const metadata = {
  title: " Genießen Sie werbefreies Streaming mit Twitch adblock ",
  description:
    "Twitch adblock ist die beste Erweiterung, die verhindert, dass während des Streamings Werbung auf Ihrem Bildschirm erscheint, und sie blockiert alle Arten von lästiger Werbung, die während des Live-Streamings erscheint.",
  openGraph: {
    title: " Genießen Sie werbefreies Streaming mit Twitch adblock ",
    description:
      "Twitch adblock ist die beste Erweiterung, die verhindert, dass während des Streamings Werbung auf Ihrem Bildschirm erscheint, und sie blockiert alle Arten von lästiger Werbung, die während des Live-Streamings erscheint.",
    url: "https://www.twitchadblocker.co/germany",
    type: "website",
  },
};

export default function Home() {
  return (
    <html lang="de">
      <head>
        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/germany"
          hrefLang="de-de"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/germany"
          hrefLang="de-lu"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/germany"
          hrefLang="de-li"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/germany"
          hrefLang="de-at"
        />
      </head>
      <body>
        <main>
          <Header />
          <Use />
          <HowToAdd />
          <InstallYoutubeAdsBlocker />
          <AboutYoutubeAdBlocker />
        </main>
      </body>
    </html>
  );
}
