"use client";

import React, { useState } from "react";
import styles from "./accordian.module.scss";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How can i prevent dangerous websites in twitch?",
    ans: "To protect your browser from dangerous websites, the only way is to download and install twitch ad solutions. The best part is this this extension is free of cost and there is no hidden charges where you can block all kind of unnecessary ads.",
  },
  {
    id: 2,
    ques: "What kind of ads this extension block?",
    ans: "It block all kind of ads such as pop-ups, video ads, and banner ads.",
  },
  {
    id: 3,
    ques: "How to block ads ?",
    ans: "If you are not aware of how to block ads on twitch, then all you have to do is to download and install the extension",
  },
  {
    id: 4,
    ques: "Is twitch adblock extension free?",
    ans: "Yes!! It is absolutely free of cost. Where you can block ads in this extension.",
  },
  {
    id: 5,
    ques: "Is this safe to use?",
    ans: "Yes, this is safe to use. By installing ublock origin twitch ads , you can watch video adblock for twitch.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
      console.log("Show");
    } else {
      setShowAnswer(questionId);
      console.log("er");
    }
  };

  return (
    <div className={styles.accordian} id="accordian">
      {/* <Image
        src="/accor-bg.svg"
        width={1817.37}
        height={1045.26}
        style={{ position: "absolute", top: "-20%", left: "-10%" }}
        alt="accordian-bg"
      /> */}
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles.img}>
                  <Image src="/add.svg" width={50} height={50} alt="add-logo" />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
        <button>GET TRUE ADBLOCKER NOW</button>
      </div>
    </div>
  );
};

export default Accordian;
