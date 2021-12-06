import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Definition(props) {
  const [definition, setDefinition] = useState("");

  var requestUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${props.subject}&origin=*`;

  useEffect(() => {
    axios.get(requestUrl).then((res) => {
      const response = res.data.query.pages;
      var key = Object.keys(response)[0];
      setDefinition(response[key].extract);
    });
  });

  return (
    <div>
      <h2>Definition of: {props.subject}</h2>
      <p>{definition}</p> source: Wikipedia
    </div>
  );
}
