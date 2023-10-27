import React from "react";
import "./aboutYoutubeAdBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const AboutYoutubeAdBlocker = () => {
  return (
    <div className="aboutYoutubeAdBlocker" id="about">
      <div className="container">
        <div className="content">
          <div className="left">
            <h2>Um</h2>
            <p>
              Twitch adblocker ist ein leistungsstarkes Tool, das verhindert,
              dass Werbung auf Ihrem Bildschirm erscheint. Es funktioniert,
              indem es all die lästigen Werbeanzeigen verhindert, die
              dazwischenkommen, und mit dieser Erweiterung können Sie
              Live-Streaming ohne Störungen genießen. Egal, ob Sie Spiele oder
              andere Arten von Inhalten ansehen, diese Erweiterung sorgt dafür,
              dass Sie ein hervorragendes Erlebnis haben. Dies ist eine
              einzigartige Möglichkeit für ein reibungsloseres Surfen, bei dem
              Sie in die Inhalte eintauchen können, die Sie am meisten lieben.
            </p>
          </div>
          <div className="right">
            <Image src="/2.svg" fill alt="about-logo" className="image" />
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default AboutYoutubeAdBlocker;
