import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>how to usethe extension to block multiple ads</h2>
            <p>
              Look no further than<span> best twitch adblocker </span> to stop
              spammed and unwanted ads by installing it. It allows you to enjoy
              live streaming by blocking auto-play advertisements quickly.
            </p>
          </div>
          <div className="right">
            <h2>
              What are the other things that I can find on twitch other than
              games?
            </h2>
            <p>
              There are so many things that you can enjoy other than games, as
              you can experience the other cool things like artists creating
              artwork, musicians playing music, and people just talking about
              different topics. It is a fun way to watch, interact and be part
              of a community with people who enjoy the same things as you. But
              the best part is that you can enjoy all of these for free in
              <span>twitch adblocker extension.</span> By using this , you can
              broadcast live streams in a hassle-free manner as it is so easy to
              install.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>What is the way to Block unlimited ads on Twitch?</h2>
              <p>
                The only way to block unlimited ads on Twitch is to install it
                in your browser. By installing it, will fully remove all
                unwanted advertisements and allow you to watch live video game
                streams without any disturbance.
              </p>
            </div>
            <div className="right">
              <Image
                src="./youtube-logo.svg"
                alt="youtube-logo"
                fill
                className="image"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>How does this extension work in browser?</h2>
                <p>
                  It works in popular browsers like Google Chrome and Firefox
                  smoothly, each browser has its own features, performance, and
                  user interface to support this extension which provides
                  additional functionality such as blocking ads and viruses.
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
