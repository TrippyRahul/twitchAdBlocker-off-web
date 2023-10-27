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
            <h2>について</h2>
            <p>
              Twitch adblock
              はシールドのように機能し、ストリーミング中に表示されるあらゆる種類の不要な広告をブロックする最高の拡張機能です。どの広告をブロックするか、どの広告をブロックしたくないかを決定できるカスタマイズ機能があります。このブラウザ拡張機能を使用すると、サードパーティのトラッカーからブラウザを保護でき、その優れたチャット機能を使用して、リアルタイムでお気に入りのプレーヤーと対話できます。中断することなく無制限のストリーミングを楽しむことができます。したがって、あまり長く待たずに、今すぐ拡張機能をダウンロードしてください。
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
