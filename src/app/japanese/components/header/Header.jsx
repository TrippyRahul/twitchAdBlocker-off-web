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
            <h1>迷惑な広告にさようならしましょう。Twitch adblock</h1>
            <p>
              Twitch は、世界中で最も有名なライブストリーミング
              プラットフォームです。特にゲーム愛好家やコンテンツクリエイター向けです。ここでは、ライブ
              ゲームをストリーミングするだけでなく、アートワークに取り組んでいるアーティスト、演奏するミュージシャン、多くのグループ間の討論など、他の多くのコンテンツを視聴することもできます。ここは、同じ考えを持つ人々が集まり、無限のコンテンツを楽しむコミュニティ
              センターのようなものです。しかし、お気に入りの番組をストリーミングしているときに、集中力をそらしてしまう広告がいくつかあり、本当にイライラすることがあります。その時点で、
              twitch 広告ブロック 盾として機能する ツイッチ 広告 消す
              お気に入りのコンテンツを楽しむことができます。これは、以下を含むすべての一般的なブラウザで動作する最高の拡張機能です。
              Twitch 広告ブロック and Fireforx.
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
