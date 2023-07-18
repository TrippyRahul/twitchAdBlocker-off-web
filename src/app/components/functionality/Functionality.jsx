import React from "react";
import "./functionality.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "It blocks ads for free",
    desc: "As comparison to twitch adblock 2022 browser extension, this new updated version of twitch adblock 2023 provides high level of protection. In older version, it blocked pop-ups, banners and display ads, where else in this new twitch ad solutions, all known malicious and dangerous websites are blocked along with the protection against phishing, malware, and bugs.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading: "It blocks third-party trackers",
    desc: "Browse the internet without being tracked by installing it to your browser will prevent all third-party trackers from following you and collecting information from your browser. In this you can protect your data.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "It will keep you safe from malware risks.",
    desc: "Protect your browser from hacking risks caused by websites with viruses by using an adblock extension. With this, you can broadcast live streaming gameplay without ads using the Chrome twitch extension.",
  },
  {
    id: 4,
    icon: "/ant-design_safety-outlined.svg",
    heading: "Speed up your browsing speed with adblock",
    desc: "If you want to maintain your speed, then you must download and install this extension.",
  },
  {
    id: 5,
    icon: "/ant-design_safety-outlined.svg",
    heading: "It blocks dangerous websites",
    desc: "Now you don’t have to worry about malware websites, as by installing it you won&#39;t accidentally visit dangerous websites as it instantly blocks your access and prevents any potential attacks.",
  },
];

const Functionality = () => {
  return (
    <div className="functionality">
      {/* <Image
        src="/func-bg.svg"
        width={2300}
        height={1045.26}
        className="bg"
        alt="functionality-logo"
      /> */}
      <div className="container">
        <h2>Features</h2>

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
