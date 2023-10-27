import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="left">
            <h1>Twitch adblock é o adblock mais confiável do mundo</h1>
            <p>
              Adblock Twitch é a extensão de navegador mais popular e tem
              milhões de usuários. Esta é a melhor extensão que permite que você
              tenha uma experiência de streaming tranquila. Aqui você pode
              transmitir seu jogo ao vivo para o público e com seus incríveis
              recursos de chat você pode conversar em tempo real com eles. Mas
              quando transmitimos nosso programa favorito, há alguns anúncios
              irritantes que estragam nosso momento e naquela hora twitch ad
              block faz mágica em nossa tela.
            </p>
            <Button />
          </div>
          <div className="right">
            <Image src="3.svg" alt="header-main" fill className="image" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
