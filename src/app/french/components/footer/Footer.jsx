import React from "react";
import styles from "./footer.module.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>twitch Ad Blocker</h2>
        <p>Enhance your twitch experience with Twitch Ad blocker</p>

        <Button />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <ul className={styles.lang}>
            <li>
              <Link href="/turkish">Turkish</Link>
            </li>
            <li>
              <Link href="/germany">Germany</Link>
            </li>
            <li>
              <Link href="/japanese">Japanese</Link>
            </li>
            <li>
              <Link href="/portuguese">Portuguese</Link>
            </li>
            <li>
              <Link href="/spanish">Spanish</Link>
            </li>
            <li>
              <Link href="/french">French</Link>
            </li>
          </ul>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular searches:</span>{" "}
              <a href="https://www.trueadblocker.net/" target="_blank">
                trueadblocker{" "}
              </a>{" "}
              , block twitch ads, twitch ad solutions, twitch adblock reddit,
              and twitch ad block reddit.
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
