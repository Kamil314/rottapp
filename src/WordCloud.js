import { select } from "d3-selection";
import "d3-transition";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

export default function Wordcloud() {
  const words = [
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },

    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },

    {
      text: "told",
      value: 40,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
  ];
  const [wordsState, setWordsState] = useState("");
  let wordski = "";
  const callbacks = {
    onWordClick: getCallback("onWordClick"),
  };
  function getCallback(callbacks) {
    return function (word, event) {
      wordski = word.text;
      setWordsState(wordski);
    };
  }

  console.log("wordsState", wordsState);
  return (
    <div className="">
      <Link to={wordsState && `/subject/${wordsState}`}>
        <ReactWordcloud callbacks={callbacks} words={words} />
      </Link>
    </div>
  );
}
