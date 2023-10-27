import React from "react";
import "./howToAdd.scss";
import Image from "next/image";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "SAFE MONEY ON YOUR MOBILE DATA EXPENSES BY USING THE EXTETSION",
    desc: "When you use your mobile data to watch YouTube, it consumes a large amount of data because there are numerous advertisements that appear during the videos. But with the adblocker for Google Chrome, you won't waste any data on advertising. You can enjoy watching your favorite show without any interruptions in adblocker google chrome.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading:
      "SPEED UP YOUR BROWSING EXPERIENCE BY USING THE AD BLOCKER CHROME EXTENTION",
    desc: "Ads and pop-ups not only create disturbance but also slow down your internet connection. If you want to maintain top speed and enjoy faster loading of your favorite websites without unwanted ads, use the adblock plus chrome extension. As, ad blocker chrome extension prevents all the harmful adverts from your browser.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "BLOCK DANGEROUS WEBSITE WITH ADBLOCK PLUS CHROME",
    desc: "Don't worry about phishing, malicious websites, and malware anymore. With youtube adblock firefox, you won't accidentally visit dangerous websites as it instantly blocks your access and prevents any potential attacks.",
  },
];

const HowToAdd = () => {
  return (
    <div className="how-to-add">
      <div className="bottom-container">
        <div className="bottom-container-top">
          <div className="top">
            <div className="left">
              <h3>Diese Erweiterung ist kostenlos</h3>
            </div>
            <div className="right">
              <Button />
            </div>
          </div>
          <div className="bottom">
            <p>
              Sie können dieses beliebte verwenden Twitch werbung blocken
              kostenlos. Es scannt Ihre Webseite und identifiziert die Elemente,
              die mit Anzeigen verknüpft sind. nicht wie Ublock origin Twitch,
              Es entfernt alle versteckten Anzeigen aus Ihrem Browser und
              ermöglicht Ihnen, das Live-Streaming ungestört zu genießen.
            </p>
            <p>
              Nun gibt es zwei beste Möglichkeiten, die volle Kontrolle über
              Ihre Browsererweiterung zu haben
            </p>
          </div>
        </div>

        <div className="bottom-container-bottom">
          <div className="left">
            <Image src="/firefox.svg" alt="firefox" fill className="img" />
            <h2> Feuerfuchs</h2>
            <p>
              Installieren Sie zunächst einfach die Erweiterung und passen Sie
              nach dem Herunterladen die Einstellungen an, indem Sie im Menü des
              Browsers „Add-ons“ auswählen. Sie können die Optionen auch
              anpassen. Es funktioniert automatisch, indem es all diese lästigen
              Anzeigen blockiert.
            </p>
          </div>
          <div className="right">
            <Image src="/chrome.svg" alt="firefox" fill className="img" />
            <h2>Chrom</h2>
            <p>
              Bevor Sie die Erweiterung installieren, müssen Sie Google Chrome
              öffnen. Jetzt können Sie nach der Erweiterung suchen und zu Chrome
              hinzufügen. Dort können Sie die Optionen anpassen. Nach der
              Installation funktioniert es automatisch und blockiert alle
              lästigen Anzeigen, die auf Ihrem Bildschirm erscheinen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAdd;
