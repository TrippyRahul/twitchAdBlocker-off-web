import React from "react";
import "./functionality.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: " Feuerfuchs",
    desc: "Installieren Sie zunächst einfach die Erweiterung und passen Sie nach dem Herunterladen die Einstellungen an, indem Sie im Menü des Browsers „Add-ons“ auswählen. Sie können die Optionen auch anpassen. Es funktioniert automatisch, indem es all diese lästigen Anzeigen blockiert. ",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading: "Chrom",
    desc: "Bevor Sie die Erweiterung installieren, müssen Sie Google Chrome öffnen. Jetzt können Sie nach der Erweiterung suchen und zu Chrome hinzufügen. Dort können Sie die Optionen anpassen. Nach der Installation funktioniert es automatisch und blockiert alle lästigen Anzeigen, die auf Ihrem Bildschirm erscheinen.",
  },
];

const Functionality = () => {
  return (
    <div className="functionality">
      <div className="container">
        <h2>Diese Erweiterung ist kostenlos</h2>
        <p>
          Sie können dieses beliebte verwenden Twitch werbung blocken kostenlos.
          Es scannt Ihre Webseite und identifiziert die Elemente, die mit
          Anzeigen verknüpft sind. nicht wie Ublock origin Twitch, Es entfernt
          alle versteckten Anzeigen aus Ihrem Browser und ermöglicht Ihnen, das
          Live-Streaming ungestört zu genießen.
        </p>

        <p>
          Nun gibt es zwei beste Möglichkeiten, die volle Kontrolle über Ihre
          Browsererweiterung zu haben
        </p>

        <div className="cards">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                width={67}
                height={67}
              />
              <h3>{item.heading}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Functionality;
