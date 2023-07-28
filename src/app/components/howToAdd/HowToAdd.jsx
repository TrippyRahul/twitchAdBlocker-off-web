import React from "react";
import "./howToAdd.scss";
import Image from "next/image";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "SAFE MONEY ON YOUR MOBILE DATA EXPENSES BY USING THE EXTETSION",
    desc: "When you use your mobile data to watch YouTube, it consumes a large amount of data because there are numerous advertisements that appear during the videos. But with the adblocker for Google Chrome, you won't waste any data on advertising. You can enjoy watching your favorite show without any interruptions in adblocker google chrome.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading:
      "SPEED UP YOUR BROWSING EXPERIENCE BY USING THE AD BLOCKER CHROME EXTENTION",
    desc: "Ads and pop-ups not only create disturbance but also slow down your internet connection. If you want to maintain top speed and enjoy faster loading of your favorite websites without unwanted ads, use the adblock plus chrome extension. As, ad blocker chrome extension prevents all the harmful adverts from your browser.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "BLOCK DANGEROUS WEBSITE WITH ADBLOCK PLUS CHROME",
    desc: "Don't worry about phishing, malicious websites, and malware anymore. With youtube adblock firefox, you won't accidentally visit dangerous websites as it instantly blocks your access and prevents any potential attacks.",
  },
];

const HowToAdd = () => {
  return (
    <div className="how-to-add">
      <div className="bottom-container">
        <div className="bottom-container-top">
          <div className="top">
            <div className="left">
              <h3>Ways to control on twitch ad blocker browser extension?</h3>
            </div>
            <div className="right">
              <Button />
            </div>
          </div>
        </div>

        <div className="bottom-container-bottom">
          <div className="left">
            <Image src="/firefox.svg" alt="firefox" fill className="img" />
            <h2>FOR FIREFOX</h2>
            <p>
              Install the extension from the <span>twitch adblocker </span>{" "}
              firefox Add-ons store.
            </p>
            <p>
              Adjust the settings by going to the browser&#39;s menu, selecting
              &quot;Add- ons,&quot; and customizing the extension options.
            </p>
            <p>
              By following these steps, you can <span> block twitch ads</span>{" "}
              on your browser.
            </p>
          </div>
          <div className="right">
            <Image src="/chrome.svg" alt="firefox" fill className="img" />
            <h2>FOR CHROME</h2>
            <p>
              Install the extension from the{" "}
              <span> Best twitch adblock chrome</span> Web Store.
            </p>
            <p>
              Right-click on the <span>chrome twitch extensions</span> icon in
              the toolbar and choose &quot;Options&quot; or &quot;Settings&quot;
              to configure its settings.
            </p>
            <p>
              By following these steps, you can have control over the extension
              on both Firefox and Chrome browsers and watch{" "}
              <span>ad free twitch </span>live streaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAdd;
