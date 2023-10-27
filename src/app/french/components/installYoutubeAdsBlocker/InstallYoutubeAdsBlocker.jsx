import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <div className="container">
        <h2>Qu&apos;entendez-vous par adblock for Twitch?</h2>
        <p>
          Twitch ad block est une extension de navigateur qui permet aux
          utilisateurs de bloquer toutes les publicités ennuyeuses de leurs
          écrans. Mais bloqueur de pub twitch est spécialement conçu pour Twitch
          où vous ne pouvez éliminer que les publicités Twitch. Cela fonctionne
          très bien et empêche le chargement de tous les éléments publicitaires.
          Vous pouvez utiliser cette extension gratuitement. Alors qu&apos;est-ce que
          tu attends? installez l&apos;extension maintenant et bloque pub twitch.
        </p>

        <h2>Comment fonctionne cette extension</h2>
        <p>
          Twitch ad blocker fonctionne parfaitement sur votre navigateur. Cela
          fonctionne en utilisant une liste de filtres qui block twitch ads sur
          les pages Web. Ainsi, lorsque vous visitez Twitch et recherchez votre
          contenu préféré, il analysera la page et supprimera les éléments liés
          à la publicité de votre écran. Cela empêchera également les trackers
          tiers ou les pirates informatiques et protégera vos informations
          personnelles. Son utilisation est sûre car il ne divulgue aucune de
          vos données privées. Il s’agit donc de la meilleure extension où vous
          pouvez profiter d’une expérience de streaming transparente sans aucune
          perturbation.
        </p>

        <p>
          Vous pouvez profiter de votre contenu le plus apprécié sur Twitch sans
          être dérangé, car l&apos;utilisation du bloc de publicité Twitch vous
          aidera à rendre votre expérience encore plus fluide. Il a la meilleure
          politique de confidentialité, il ne fournit aucune de vos données
          privées et protège votre navigateur des trackers tiers. Vous pouvez
          même accélérer votre vitesse de navigation, ce qui réduira votre temps
          de chargement sur Twitch. Twitch adblock est la meilleure extension
          qui fonctionne sur tous les navigateurs, y compris Google Chrome et
          Firefox.
        </p>

        <div className="content">
          <h2>Caractéristiques</h2>
          <ul>
            <li>
              Avec Twitch Adblock, vous pouvez bloquer tous les types de
              publicités dérangeantes qui apparaissent pendant le streaming
            </li>
            <li>
              Il protégera toutes vos données personnelles des pirates ou des
              trackers tiers
            </li>
            <li>Il vous garantit une grande vitesse de navigation</li>
            <li>
              Vous pouvez également protéger votre navigateur en bloquant les
              sites Web dangereux et en supprimant le contenu non pertinent de
              votre écran.
            </li>
            <li>
              C&apos;est gratuit et vous pouvez éliminer les publicités gratuitement
            </li>
            <li>
              C&apos;est le moyen le plus sûr de bloquer les publicités car il ne
              divulgue aucune de vos informations personnelles.
            </li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
