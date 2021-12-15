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
      text: "Python Language",
      value: 40,
    },
    {
      text: ".NET framework",
      value: 11,
    },
    {
      text: "React Frameword",
      value: 16,
    },
    {
      text: "Angular",
      value: 17,
    },
    {
      text: "Vue",
      value: 40,
    },
    {
      text: "Linear Regression",
      value: 11,
    },
    {
      text: "SQL",
      value: 16,
    },
    {
      text: "Data science",
      value: 17,
    },
    {
      text: "Design patterns",
      value: 40,
    },
    {
      text: "MySQL",
      value: 11,
    },
    {
      text: "Postgres",
      value: 16,
    },
    {
      text: "Databases",
      value: 17,
    },
    {
      text: "NoSQL",
      value: 40,
    },
    {
      text: "CosmosDB",
      value: 11,
    },
    {
      text: "DynamoDB",
      value: 16,
    },
    {
      text: "OOP",
      value: 17,
    },
    {
      text: "Kafka",
      value: 40,
    },
    {
      text: "RabbitMQ",
      value: 11,
    },
    {
      text: "Java",
      value: 16,
    },
    {
      text: "JavaScript",
      value: 17,
    },
    {
      text: "Ruby on Rails",
      value: 40,
    },
    {
      text: "Matlab",
      value: 11,
    },
    {
      text: "Scala",
      value: 16,
    },
    {
      text: "Apache Spark",
      value: 17,
    },
    {
      text: "MongoDB",
      value: 40,
    },
    {
      text: "Lamba architectuur",
      value: 11,
    },
    {
      text: "Microsoft Azure",
      value: 16,
    },
    {
      text: "Amazon Web Services",
      value: 17,
    },
    {
      text: "Google Cloud Platform",
      value: 40,
    },
    {
      text: "Apple Computers",
      value: 11,
    },
    {
      text: "Microsoft",
      value: 16,
    },
    {
      text: "REST-API",
      value: 17,
    },
    {
      text: "GRPC",
      value: 40,
    },
    {
      text: "MQTT",
      value: 11,
    },
    {
      text: "NGINX",
      value: 16,
    },
    {
      text: "HTML",
      value: 17,
    },
    {
      text: "CSS",
      value: 40,
    },
    {
      text: "Twitter",
      value: 11,
    },
    {
      text: "Facebook",
      value: 16,
    },
    {
      text: "Unit testing",
      value: 17,
    },
    {
      text: "Intergration testing",
      value: 40,
    },
    {
      text: "Web Development",
      value: 11,
    },
    {
      text: ".NET 6",
      value: 16,
    },
    {
      text: "GitHub Copilot",
      value: 17,
    },
    {
      text: "GitHub",
      value: 40,
    },
    {
      text: "GitLab",
      value: 11,
    },
    {
      text: "Entity Framework",
      value: 16,
    },
    {
      text: "ORM",
      value: 17,
    },
    {
      text: "SQL Injection Attack",
      value: 40,
    },
    {
      text: "CORS",
      value: 11,
    },
    {
      text: "XSS attack",
      value: 16,
    },
    {
      text: "TailWind",
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
  const options = {
    rotations: 2,
    rotationAngles: [0, 0],
  };

  console.log("wordsState", wordsState);
  return (
    <div className="">
      <Link to={wordsState && `/subject/${wordsState}`}>
        <ReactWordcloud callbacks={callbacks} words={words} options={options} />
      </Link>
    </div>
  );
}
