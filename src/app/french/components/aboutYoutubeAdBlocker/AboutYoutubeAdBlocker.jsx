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
            <h2>About</h2>
            <p>
              Twitch adblock est le moyen le plus pratique de se débarrasser de
              toutes les publicités ennuyeuses sur Twitch. Vous pouvez utiliser
              le Twitch adblock gratuitement, mais pour utiliser Twitch, vous
              devez disposer d'un compte et d'un abonnement. C'est un processus
              très simple et rapide pour télécharger l'extension car il vous
              suffit de visiter leur site officiel et d'installer l'extension
              sur votre navigateur. Après le téléchargement, il bloquera
              automatiquement tous les types de publicités, y compris les
              bannières publicitaires, les publicités vidéo, les pop-ups et bien
              d'autres. La meilleure partie est que pendant la diffusion, vous
              pouvez interagir avec votre joueur préféré via sa fonction de
              chat. Vous pouvez également partager avec eux vos émotions en
              temps réel. Sur Twitch, vous pouvez non seulement diffuser des
              jeux, mais il existe de nombreuses autres options permettant de
              regarder des œuvres d'artistes, des performances de certains des
              meilleurs musiciens et des discussions entre de nombreux groupes.
              C’est donc pour tout le monde que chacun peut profiter de son
              contenu le plus apprécié sans aucune interruption.
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
