import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
    <html lang="fr">
      <head>
        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/french"
          hrefLang="fr-fr"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/french"
          hrefLang="fr-be"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/french"
          hrefLang="fr-ca"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/french"
          hrefLang="fr-ch"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/french"
          hrefLang="fr-mc"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/french"
          hrefLang="fr-lu"
        />
      </head>
      <body>
        <main>
          <Header />
          <InstallYoutubeAdsBlocker />
          <AboutYoutubeAdBlocker />
          <Footer />
        </main>
      </body>
    </html>
  );
}
