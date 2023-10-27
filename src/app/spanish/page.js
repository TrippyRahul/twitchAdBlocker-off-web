import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Functionality from "./components/functionality/Functionality";
import HowToAdd from "./components/howToAdd/HowToAdd";

export const metadata = {
  title: " Tenga una experiencia de transmisión ilimitada con Twitch adblock",
  description:
    "Twitch adblock es el maravilloso bloqueador de anuncios que bloquea todo tipo de anuncios y te permite tener una experiencia de transmisión ilimitada.",
  openGraph: {
    title: " Tenga una experiencia de transmisión ilimitada con Twitch adblock",
    description:
      "Twitch adblock es el maravilloso bloqueador de anuncios que bloquea todo tipo de anuncios y te permite tener una experiencia de transmisión ilimitada.",
    url: "https://www.twitchadblocker.co/spanish",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Use />
      <InstallYoutubeAdsBlocker />
      <AboutYoutubeAdBlocker />
    </main>
  );
}
