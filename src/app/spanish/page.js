import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";
import Functionality from "./components/functionality/Functionality";
import HowToAdd from "./components/howToAdd/HowToAdd";
import Footer from "./components/footer/Footer";

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
    <html href="es">
      <head>
        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-es"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-ar"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-co"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-pe"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-mx"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-cl"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-uy"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-cr"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-bo"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-cu"
        />

        <link
          rel="alternate"
          href="https://www.twitchadblocker.co/spanish"
          hrefLang="es-ma"
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
