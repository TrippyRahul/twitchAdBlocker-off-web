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
            <h2>Acerca de</h2>
            <p>
              Es la plataforma de streaming más famosa donde los streamers
              retransmiten juegos y ven contenido de videojuegos. Al usar esto,
              los usuarios pueden transmitir en vivo mientras juegan, crear y
              compartir otro tipo de contenido con su audiencia a través de su
              función de chat. Aquí también podéis interactuar entre vosotros en
              tiempo real. Es la mejor manera de tener interacción en vivo.
              Tiene algunas de las mejores características donde puedes
              divertirte al máximo.
            </p>
            <p>
              Es la mejor extensión de navegador que permite a sus usuarios
              disfrutar de todos sus videos favoritos sin interrupciones. Es
              gratuito y no tienes que pagar por ello. Además, al descargar e
              instalar el twitch adblocker, puedes transmitir todo tu contenido
              favorito e incluso interactuar con tu mejor jugador en tiempo
              real. También puedes compartir tu experiencia al respecto. Con
              esta extensión, también puedes bloquear piratas informáticos
              externos y proteger tu navegador. Es la forma más exclusiva de
              transmitir tus mejores programas sin interrupciones.
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
