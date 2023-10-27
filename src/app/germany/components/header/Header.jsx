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
            <h1>Die beliebtesten adblock for free</h1>
            <p>
              Twitch ad blockerist die beliebteste Erweiterung, die es Streamern
              ermöglicht, ihr Gameplay live an ihr Publikum zu übertragen. Das
              Beste daran ist, dass Sie per Chat in Echtzeit mit ihnen
              interagieren können. Aber jedes Mal, wenn wir streamen, tauchen
              dazwischen ein paar irritierende Werbeanzeigen auf, und das hat
              uns wirklich sauer gemacht. Um diese frustrierenden Anzeigen
              loszuwerden, können Sie sie installieren Twitch adblocker. Durch
              das Herunterladen dieser Erweiterung können Sie unbegrenztes
              Streaming genießen.
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
