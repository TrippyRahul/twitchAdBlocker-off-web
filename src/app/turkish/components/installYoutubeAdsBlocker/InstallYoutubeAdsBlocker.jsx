import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <div className="container">
        <h2>Özellikler</h2>

        <div className="content">
          <ul>
            <li>Twitch ad blocker reklamları ücretsiz engeller</li>
            <li>Ayrıca üçüncü taraf izleyicileri de engeller</li>
            <li>Tarayıcınızı tehlikeli web sitelerinden koruyun</li>
            <li>Web sayfanızı hızlandırın</li>
            <li>Twitch adblock tüm zararlı siteleri engeller</li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
