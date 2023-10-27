import React from "react";
import "./install.scss";
import Image from "next/image";

const Install = () => {
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
          <a href="https://chrome.google.com/webstore/detail/twitch-adblocker/iaokppbbpahmidkimkdfmkmddmcoegjj/related">
            <button>
              <Image
                src="/ri_firefox-fill.svg"
                width={30}
                height={30}
                alt="firefox-logo"
              />
              Add to Firefox
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Install;
