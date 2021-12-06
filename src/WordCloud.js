import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { select } from "d3-selection";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import "d3-transition";
import ReactWordcloud from "react-wordcloud";





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
  const [wordsState, setWordsState] = useState('')
let wordski = '';
  const callbacks = {
    onWordClick: getCallback("onWordClick"),
  };
  function getCallback(callbacks) {
    return function (word, event) {
      const isActive = callbacks !== "onWordClick";
      const element = event.target;
      const text = select(element);
      console.log(word.text);
      wordski = word.text;
      setWordsState(wordski);
      text
        .on("click", () => {
          if (isActive) {
            <Link to={`/subject/${wordski}`}>{wordski}</Link>;
          }
        })
        .transition()
    };
  }

   
  return (
    <div>
      <Link to={`/subject/${wordsState}`}>      
      <ReactWordcloud callbacks={callbacks} words={words} />
      </Link>;
    </div>
  );
}
