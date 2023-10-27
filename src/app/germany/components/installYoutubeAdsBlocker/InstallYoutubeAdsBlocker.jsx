import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <div className="container">
        <h2>Entdecken Sie die Erweiterung</h2>
        <p>
          Durch das Herunterladen der Erweiterung werden automatisch alle Arten
          von Werbung blockiert, einschließlich Bannerwerbung, Videoanzeigen,
          Pop-ups und viele mehr. Es schützt Ihren Browser auch vor Malware und
          allen schädlichen Websites.
        </p>
        <p>
          Jetzt können Sie das nahtlose Surferlebnis auf Twitch genießen. Durch
          die Verwendung dieser Erweiterung erhöhen Sie die Geschwindigkeit
          Ihres Live-Streamings und stoppen alle Viren, die in Ihren Browser
          gelangen. Es funktioniert auch wie eine Kindersicherung und schützt
          alle Ihre persönlichen Daten. Genießen Sie also unüberspringbares
          Live-Streaming.
        </p>

        <div className="content">
          <h2>Merkmale</h2>
          <ul>
            <li>Es blockiert kostenlos Werbung</li>
            <li>Es blockiert Tracker von Drittanbietern</li>
            <li>Es schützt Sie vor Malware-Risiken</li>
            <li>Beschleunigen Sie Ihre Surfgeschwindigkeit mit Adblock</li>
            <li>Es blockiert gefährliche Websites</li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
