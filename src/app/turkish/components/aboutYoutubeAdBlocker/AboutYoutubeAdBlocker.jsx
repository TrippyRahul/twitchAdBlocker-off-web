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
            <h2>Hakkında</h2>
            <p>
              Twitch adblock akış sırasında ekranınızda görünen istenmeyen
              reklamları engellediği için sihir gibi çalışan harika bir
              uzantıdır. Araya giren tüm sinir bozucu ve sinir bozucu reklamları
              önleyerek mükemmel çalışır. Kesintisiz canlı yayın yapmanızı
              sağlar. Karşılaştırıldığında purple ads blocker, the Twitch
              adblock en iyi uzantıdır. Bu nedenle, uzantıyı şimdi indirmek için
              çok fazla beklemeyin ve en sevdiğiniz içeriğin keyfini herhangi
              bir rahatsızlık duymadan çıkarın.
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
