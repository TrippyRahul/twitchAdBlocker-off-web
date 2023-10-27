import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>Como é que adblock for Twitch trabalhar?</h2>
            <p>
              É um processo muito fácil e simples, bastando visitar o site
              oficial e baixar e instalar o ad block Twitch no seu navegador.
              Depois de instalá-lo, você pode ter o Twitch Sem anúncio de graça.
              A melhor parte é que esta extensão funciona em todos os
              navegadores, como twitch adblock firefox, twitch adblock reddit, e
              adblock twitch opera.
            </p>
          </div>
          <div className="right">
            <h2>O Twitch é apenas para jogadores?</h2>
            <p>
              Agora, há muito mais coisas interessantes que você pode desfrutar
              no Twitch, incluindo artistas criando obras de arte, músicos
              tocando música e debates entre vários grupos. É a forma mais
              interessante de transmitir e interagir com seus artistas
              favoritos. A melhor parte é que esta extensão é gratuita e basta
              baixar adblock para Twitch você pode transmitir streaming ao vivo
              sem anúncios perturbadores.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>Bloqueie anúncios irritantes com esta extensão</h2>
              <p>
                InstalandoTwitch adblock é a melhor maneira de bloquear todos
                aqueles anúncios irritantes, incluindo banners, anúncios em
                vídeo e muitos outros. Depois de instalar a extensão, ela
                removerá automaticamente todos os anúncios indesejados da sua
                tela. Ele atualizou sua nova versão de Adblock Twitch 2022.
              </p>
            </div>
            <div className="right">
              <Image src="/1.svg" alt="youtube-logo" fill className="image" />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>Como usar esta extensão no seu navegador?</h2>
                <p>
                  É muito fácil e a melhor parte é que funciona em todos os
                  navegadores populares, incluindo Google Chrome e Firefox. Ele
                  também possui alguns dos melhores recursos que o ajudarão a
                  transmitir ao vivo sem anúncios. Aqui você pode não apenas
                  bloquear anúncios, mas também proteger seu navegador contra
                  vírus prejudiciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
