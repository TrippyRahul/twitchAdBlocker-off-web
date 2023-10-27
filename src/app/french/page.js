import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Functionality from "./components/functionality/Functionality";
import HowToAdd from "./components/howToAdd/HowToAdd";

export const metadata = {
  title:
    "  Profitez d'une diffusion en direct incontournable avec Twitch adblock",
  description:
    "Twitch adblock est l'extension de navigateur la plus étonnante où vous pouvez profiter d'une diffusion en direct incontournable sans aucune perturbation.",
  openGraph: {
    title:
      "  Profitez d'une diffusion en direct incontournable avec Twitch adblock",
    description:
      "Twitch adblock est l'extension de navigateur la plus étonnante où vous pouvez profiter d'une diffusion en direct incontournable sans aucune perturbation.",
    url: "https://www.twitchadblocker.co/french",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      {/* <Use /> */}
      <InstallYoutubeAdsBlocker />
      <AboutYoutubeAdBlocker />
    </main>
  );
}
