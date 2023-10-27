import Use from "./components/use/Use";
import InstallYoutubeAdsBlocker from "./components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker";
import AboutYoutubeAdBlocker from "./components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker";
import Header from "./components/header/Header";

export const metadata = {
  title: " Tarama hızınızı artırın Twitch adblock",
  description:
    "Twitch adblock kesintisiz akışa sahip olmanızı sağlayan en muhteşem uzantıdır. Ayrıca araya giren tüm sinir bozucu reklamları da engeller.",
  openGraph: {
    title: " Tarama hızınızı artırın Twitch adblock",
    description:
      "Twitch adblock kesintisiz akışa sahip olmanızı sağlayan en muhteşem uzantıdır. Ayrıca araya giren tüm sinir bozucu reklamları da engeller.",
    url: "https://www.twitchadblocker.co/turkish",
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
