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
            <h2>Sobre</h2>
            <p>
              Esta extensão é uma ferramenta maravilhosa que elimina a exibição
              de todos os tipos de anúncios na tela. Funciona perfeitamente,
              pois evita todos aqueles anúncios irritantes que aparecem durante
              a transmissão. Ele permite que você faça transmissão ao vivo sem
              qualquer perturbação. Assim, você poderá assistir jogos ou outros
              tipos de conteúdo, esta extensão irá garantir que você tenha uma
              experiência incrível. É a melhor forma de mergulhar no espetáculo
              que você mais ama.
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
