import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      {/* <Image
        src="/install-bg.svg"
        width={1817.37}
        height={1045.26}
        className="bg"
        alt="install-bg"
      /> */}
      <div className="container">
        <h2>Experience the liberty with this addition</h2>

        <p>
          This enhances your experience by just not only blocking ads but also
          reducing page load times, it will protect against the malware,adware,
          and offering the safety with twitch no ads.
        </p>

        <h3>
          It’s time to install the extension on your browser to enjoy seamless
          browsing experience.
        </h3>

        <div className="content">
          <ul>
            <li>It will enhance your live streaming speed faster.</li>
            <li>It will stop malware and virus</li>
            <li>It will give you continuous live streaming and music.</li>
            <li>It works like a child lock.</li>
          </ul>
          <ul>
            <li>
              you can enjoy unskippable live streaming with block ads on twitch
            </li>
            <li>It will protect your data</li>
            <li>
              {" "}
              Chrome twitch extensions will give you a safe browsing experience
            </li>
            <li>
              In twitch ad blocker firefox you can broadcast live streaming and
              other content without disturbance{" "}
            </li>
            <li> Remove viruses with this adblock</li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
