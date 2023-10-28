import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Functionality from "./components/functionality/Functionality";
import HowToAdd from "./components/howToAdd/HowToAdd";

export const metadata = {
  title: "  Mergulhe em streaming ilimitado com Twitch adblock",
  description:
    "Twitch adblock é uma extensão maravilhosa que permite streaming ilimitado. Isso o ajudará a bloquear todos os anúncios irritantes que aparecem no meio.",
  openGraph: {
    title: "  Mergulhe em streaming ilimitado com Twitch adblock",
    description:
      "Twitch adblock é uma extensão maravilhosa que permite streaming ilimitado. Isso o ajudará a bloquear todos os anúncios irritantes que aparecem no meio.",
    url: "https://www.twitchadblocker.co/portuguese",
    type: "website",
  },
};

export default function Home() {
  return (
    <html href="pt">
      <head>
        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/portuguese"
          hrefLang="pt-pt"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/portuguese"
          hrefLang="pt-ao"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/portuguese"
          hrefLang="pt-br"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/portuguese"
          hrefLang="pt-mo"
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
