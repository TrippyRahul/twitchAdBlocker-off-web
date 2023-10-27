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
            <h1>Twitch adblock dünyanın en popüler reklam engelleyicisidir</h1>
            <p>
              Bu en şaşırtıcı uzantıdır ve kullanıcılar arasında oldukça
              popülerdir. Adblock for Twitch harika bir yayın deneyimi
              yaşamanızı sağlayan en iyi tarayıcı uzantısıdır. Bu uzantıda canlı
              oyununuzu izleyicilerinize yayınlayabilir veya favori oyuncunuzla
              gerçek zamanlı olarak etkileşime girebilirsiniz. Bazen araya
              reklamlar giriyor ve bu çok sinir bozucu oluyor çünkü bu
              reklamları ne zaman izlesek anımızı mahvediyor. O zaman,Twitch ad
              block bir kalkan görevi gördü ve deneyimimizi daha da unutulmaz
              kıldı.
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
