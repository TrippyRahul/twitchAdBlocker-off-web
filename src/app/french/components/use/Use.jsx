import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>Qu&apos;entendez-vous par adblock for Twitch?</h2>
            <p>
              Twitch ad block est une extension de navigateur qui permet aux
              utilisateurs de bloquer toutes les publicités ennuyeuses de leurs
              écrans. Mais bloqueur de pub twitch est spécialement conçu pour
              Twitch où vous ne pouvez éliminer que les publicités Twitch. Cela
              fonctionne très bien et empêche le chargement de tous les éléments
              publicitaires. Vous pouvez utiliser cette extension gratuitement.
              Alors qu&apos;est-ce que tu attends? installez l&apos;extension maintenant
              et bloque pub twitch.
            </p>
          </div>
          <div className="right">
            <h2>Como funciona</h2>
            <p>
              Funciona muy bien en su navegador. Al igual que cuando buscas un
              vídeo en Twitch, la extensión escanea tu página web y detiene los
              elementos relacionados con anuncios en ella. Bloquea todo tipo de
              anuncios, incluidos anuncios publicitarios, anuncios de vídeo,
              ventanas emergentes y muchos más. También elimina los anuncios
              ocultos que sólo aparecen durante la transmisión. En adblock
              twitch Obtendrá la opción de personalización donde podrá elegir
              qué anuncio desea detener y qué anuncio desea ejecutar. Siempre
              garantiza a sus usuarios que tendrán una experiencia increíble.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>Esta usando adblock for Twitch safe</h2>
              <p>
                Usar la extensión es absolutamente seguro. A diferencia de otros
                bloqueadores de anuncios, no almacena su información personal.
                Protege sus datos de rastreadores de terceros. Con esta
                extensión, puedes tener control total sobre Twitch y bloquear
                todo tipo de contenido irrelevante en tu navegador. También
                eliminan todos esos anuncios repetitivos y molestos que pueden
                arruinar tu momento de streaming. Es gratuito, donde podrás
                disfrutar de tu contenido favorito sin problemas ni molestias.
                Funciona perfectamente en tu navegador y la mejor parte es que
                funciona en todos los navegadores. No tiene ninguna complicación
                a la hora de instalar el adblock for twitch.
              </p>
            </div>
            <div className="right">
              <Image src="/1.svg" alt="youtube-logo" fill className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
