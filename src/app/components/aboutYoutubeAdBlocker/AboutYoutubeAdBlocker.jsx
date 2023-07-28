import React from "react";
import "./aboutYoutubeAdBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const AboutYoutubeAdBlocker = () => {
  return (
    <div className="aboutYoutubeAdBlocker" id="about">
      {/* <Image
        src="/howToadd-bg.svg"
        width={2091.29}
        height={1195.05}
        className="bg"
        alt="how-to-add"
      /> */}
      <div className="container">
        <div className="content">
          <div className="left">
            <h2>About twitch ad blocker</h2>
            <p>
              It is a helpful tool that stops ads from appearing when you watch
              streams on Twitch. It works by preventing those annoying ads from
              showing up during live streams. With this you can enjoy video
              ablock for twitch without any interruptions. Whether you&#39;re
              watching gaming streams or other types of content, this tool
              ensures that you can focus on the stream itself without the
              distractions of commercials. It&#39;s a great way to have a
              smoother and more enjoyable time on twitch, allowing you to fully
              immerse yourself in the content you love.
            </p>
            <p>
              Twitch adblocker blocks all annoying ads on twitch, hulu, spotify
              and youtube. But if you want a separate adblocker of these
              extension then we have true adblocker, hulu adblocker, spotify
              adblocker and youtube adblocker.
            </p>
          </div>
          <div className="right">
            <Image src="/about.svg" fill alt="about-logo" className="image" />
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default AboutYoutubeAdBlocker;
