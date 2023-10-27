import React from "react";
import "./functionality.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "Twitch ad blocker reklamları ücretsiz engeller",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading: "Ayrıca üçüncü taraf izleyicileri de engeller",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "Tarayıcınızı tehlikeli web sitelerinden koruyun",
  },
  {
    id: 4,
    icon: "/ant-design_safety-outlined.svg",
    heading: "Web sayfanızı hızlandırın",
  },
  {
    id: 5,
    icon: "/ant-design_safety-outlined.svg",
    heading: "Twitch adblock tüm zararlı siteleri engeller ",
  },
];

const Functionality = () => {
  return (
    <div className="functionality">
      <div className="container">
        <h2>Özellikler</h2>

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
