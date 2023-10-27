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
            <li>
              Com esta extensão você pode bloquear todos os tipos de anúncios
              gratuitamente
            </li>
            <li>
              Também bloqueia rastreadores de terceiros que podem danificar
              nosso navegador
            </li>
            <li>Proteja seu navegador contra malware com esta extensão</li>
            <li>Aumente a velocidade de sua navegação</li>
            <li>Bloqueie todos os sites perigosos do seu navegador</li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
