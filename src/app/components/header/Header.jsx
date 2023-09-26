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
            <h1>THE MOST TRUSTED ADBLOCK FOR FREE</h1>
            <p>
              Twitch is a popular live streaming platform that allows streamers
              to broadcast their gameplay live to an audience. You can interact
              with them in real time through chat. But there are some unwanted
              ads which shows up in between and it is frustrated to watch them.
              So, to get rid of those annoying ads, just install the extension.
              With this, you can have the best experience on twitch adblock
              plus.
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
