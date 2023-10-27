import React from "react";
import "./howToAdd.scss";
import Image from "next/image";
import Button from "../button/Button";

const HowToAdd = () => {
  return (
    <div className="how-to-add">
      <div className="bottom-container">
        <div className="bottom-container-top">
          <div className="top">
            <div className="left">
              <h3>Twitch adblock é grátis para usar</h3>
            </div>
            <div className="right">
              <Button />
            </div>
          </div>
          <div className="bottom">
            <p>
              Esta é a extensão mais incrível e de uso gratuito. Funciona
              perfeitamente no seu navegador, verificando sua página da web.
              Também identifica os elementos associados aos anúncios. Ele não
              apenas bloqueia anúncios, mas também protege seu navegador contra
              malware e sites perigosos.
            </p>
            <p>
              Funciona nos navegadores mais populares, incluindo Firefox e
              Google Chrome. É muito fácil baixar a extensão em ambos os
              navegadores, bastando procurar a extensão e instalá-la em seu
              navegador. Após o download, ele funcionará automaticamente
              bloqueando todos os anúncios frustrantes que aparecem durante a
              transmissão. Ele também protegerá seu navegador contra malware e
              todos os sites prejudiciais. Agora você pode aproveitar a
              experiência de navegação perfeita no Twitch. Ele também aumentará
              a velocidade da transmissão ao vivo e eliminará todos os vírus
              perigosos que surgirem. Ele também possui um bloqueio para
              crianças e protegerá todas as suas informações privadas. Então, o
              que você está esperando? baixe a extensão e desfrute de streaming
              não pulável agora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAdd;
