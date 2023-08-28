"use client";
import React from "react";
import "./install.scss";
import Image from "next/image";

const Install = () => {
  const handleFirefoxButtonClick = () => {
    const redirectURL =
      "https://chrome.google.com/webstore/detail/trueadblocker/bfnbbojgkemfejhnedknbidfceobmmek?utm_source=ext_sidebar&hl=en-US";
    window.open(redirectURL, "_blank");
  };
  return (
    <div className="install">
      <div className="container">
        <div className="left">
          <Image src="/firefox.svg" className="image" fill alt="firefox-logo" />
        </div>
        <div className="right">
          <h2>
            It&apos;s a free extension for twitch adblocker firefox and Chrome
          </h2>
          <p>
            When you visit a web page on Firefox or in Chrome, it scans the
            webpage and identifies the elements associated with ads. It then
            prevents them from loading or displaying on the page. This
            effectively removes or hides the ads from your view, and lets you
            enjoy the live streaming without interruptions.
          </p>
          <button onClick={handleFirefoxButtonClick}>
            {" "}
            <Image
              src="/ri_firefox-fill.svg"
              width={30}
              height={30}
              alt="firefox-logo"
            />
            Add to Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
