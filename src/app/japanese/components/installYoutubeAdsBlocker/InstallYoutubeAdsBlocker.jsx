import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <div className="container">
        <h2>特徴</h2>

        <div className="content">
          <ul>
            <li>
              この拡張機能を使用すると、あらゆる種類の不要な広告を無料でブロックできます。
              Twitch adblock 金額はかかりません。
            </li>
            <li>
              あなたの個人情報を保護し、第三者のトラッカーやハッカーに漏洩しません。
            </li>
            <li>
              と Twitch 広告ブロック Chrome,
              ブラウザに損害を与える可能性のあるあらゆる種類の危険な Web
              サイトを削除することで、ブラウザを保護できます。
            </li>
            <li>
              また、ブロックした後でもストリーミング中に表示される非表示の広告もブロックします。
            </li>
            <li>
              最高のプライバシー
              ポリシーがあり、シームレスなエクスペリエンスを保証します。.
            </li>
            <li>チャイルドロックが付いています</li>
            <li>Web ページの読み込みを高速化できます。</li>
            <li>
              ツイッチ広告ブロック
              消費するデータ量が減り、ブラウザ上の占有スペースも少なくなります。
            </li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
