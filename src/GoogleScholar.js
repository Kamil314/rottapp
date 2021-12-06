import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GoogleScholar(props) {
  const [natureResults, setNatureResults] = useState([]);
  var apiKey = "09977f472ef6c58f2847205f2d51f80e";
  var requestUrl = `http://api.springernature.com/openaccess/json?q=keyword:${props.subject}&api_key=${apiKey}`;

  useEffect(() => {
    axios.get(requestUrl).then((res) => {
      setNatureResults(res.data.records);
    });
  }, []);

  return (
    <div>
      <h2>Latest Nature publications about: {props.subject}</h2>
      {natureResults.map((result) => (
        <div>
          <h4>{result.title}</h4>
          <p>{result.abstract.p}</p>
          <a href={result.url[0].value}>{result.url[0].value}</a>
        </div>
      ))}
    </div>
  );
}
