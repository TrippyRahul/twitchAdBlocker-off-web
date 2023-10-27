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
              Twitch adblock est la plateforme de streaming la plus populaire
            </h1>
            <p>
              Twitch est la plateforme de streaming la plus connue au monde.
              C&apos;est le meilleur moyen de diffuser votre contenu préféré sans
              aucun problème. Mais il y a des publicités frustrantes et ces
              publicités sont tellement irritantes qu’elles gâchent notre
              moment. Ici, vous pouvez interagir avec votre joueur préféré en
              temps réel. En téléchargeant et en installant simplement, vous
              pouvez bloquer tous les types de publicités, y compris les
              publicités vidéo, les bannières publicitaires, les fenêtres
              contextuelles et bien d&apos;autres. La meilleure partie est que c’est
              gratuit. Donc, bloquer pub Twitch avec Twitch adblock.
            </p>
            <Button />
          </div>
          <div className="right">
            <Image src="3.svg" alt="header-main" fill className="image" />
          </div>
        </div>
      </section>

      <div className="hero">
        <div className="container">
          <div className="left">
            <p>
              Mais savez-vous pourquoi il y a autant de publicités sur Twitch ?
              C&apos;est parce que Twitch s&apos;appuie sur la publicité pour générer des
              revenus. Twitch affiche différents types de publicités telles que
              des publicités pré-roll qui sont diffusées avant la diffusion, des
              publicités mil roll qui sont diffusées pendant les intervalles et
              des publicités qui incluent des bannières publicitaires et des
              panneaux sur une page. Ces publicités sont tellement frustrantes à
              regarder entre les émissions et cela gâche totalement notre
              showtime. À ce moment-là, adblock twitch a fonctionné comme par
              magie en téléchargeant simplement adblock for Twitch sur votre
              navigateur, il bloquerait automatiquement tous les types de
              publicités irritantes qui perturbent notre flux pendant la
              diffusion.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
