import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>Wie benutzt man adblock Twitch</h2>
            <p>
              Es ist ein sehr einfacher und schneller Vorgang. Besuchen Sie
              einfach die offizielle Website Twitch ad block und laden Sie die
              Erweiterung in Ihren Browser herunter. Sobald Sie es installiert
              haben, funktioniert es automatisch und blockiert alle Arten von
              Werbung während des Live-Streamings. Das Beste daran ist, dass
              diese Erweiterung in jedem Browser funktioniert, z Twitch Adblock
              Chrome Und Twitch Adblock Firefox.
            </p>
          </div>
          <div className="right">
            <h2>
              Gibt es außer Spielen noch etwas, das ich auf Twitch genießen
              kann?
            </h2>
            <p>
              Ja, man kann viele interessante Dinge weitermachen Adblocker
              Twitch wie Künstler, die Kunstwerke schaffen, Musiker, die Musik
              machen, und Diskussionen zwischen vielen Gruppen. Es ist die
              einzigartigste Art, unsere Lieblingskünstler zu sehen und mit
              ihnen zu interagieren. Das Beste ist, dass Sie all diese Dinge
              kostenlos genießen können, indem Sie einfach das installieren
              adblock for Twitch und Live-Streaming ohne Werbung übertragen.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>
                Was ist der beste Weg, um lästige Werbung darauf zu blockieren?
              </h2>
              <p>
                Durch die Installation Twitch adblock Dies ist die einzige
                Möglichkeit, all diese störenden Anzeigen in Ihrem Browser zu
                blockieren. Nach dem Herunterladen werden alle unerwünschten
                Anzeigen, die Ihr Twitch-Erlebnis ruinieren, vollständig
                entfernt.
              </p>
            </div>
            <div className="right">
              <Image src="/1.svg" alt="youtube-logo" fill className="image" />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>Wie funktioniert diese Erweiterung in Ihrem Browser?</h2>
                <p>
                  Es funktioniert problemlos in gängigen Browsern wie Google
                  Chrome und Firefox. Es verfügt über einige großartige
                  Funktionen, mit denen Sie werbefreies Live-Streaming genießen
                  können. Es blockiert nicht nur unerwünschte Werbung, sondern
                  schützt Ihren Browser auch vor Viren.
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
