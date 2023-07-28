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
              it is the most widely trusted adblock available today for free.
            </h1>
            <p>
              Twitch is a popular live-streaming platform that primarily focuses
              on. It allows streamers to broadcast their gameplay live to an
              audience, where you can interact with them in real-time through
              chat. But there are ads that show up between the live streaming
              and so frustrating to watch. So, to get rid of these annoying ads,
              you can install the extension. By using it, you can have the best
              experience on twitch adblock plus.
            </p>
            <Button/>
          </div>
          <div className="right">
            <Image
              src="./header-main.svg"
              alt="header-main"
              fill
              className="image"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
