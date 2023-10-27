import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <div className="container">
        <h2>Características</h2>

        <div className="content">
          <ul>
            <li>Bloquea todo tipo de anuncios molestos gratis</li>
            <li>También bloquea todo tipo de contenido irrelevante.</li>
            <li>Proteja su información privada</li>
            <li>Acelera tu velocidad de navegación</li>
            <li>Bloquea todos los sitios web peligrosos</li>
            <li>
              Proteja su navegador de rastreadores o piratas informáticos de
              terceros
            </li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
