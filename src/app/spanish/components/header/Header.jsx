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
            <h1>
              Disfrute de una transmisión que no se puede omitir con Twitch
              adblock
            </h1>
            <p>
              Adblock Twitch es la plataforma más popular donde puedes
              transmitir juegos en vivo. La mejor parte es que puedes
              interactuar con tu reproductor favorito mientras transmites. Pero
              a veces, es posible que hayas visto algunos anuncios perturbadores
              que se interponen y arruinan por completo tu momento. En ese
              momento, simplemente descargar e instalar Adblock para Twitch
              puede hacer que tu experiencia sea memorable.
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
