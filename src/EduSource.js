import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EduSource(props) {
  const [definition, setDefinition] = useState("");

  let body = {
    search_text: "github",
    filters: [],
    page_size: 10,
    page: 1,
  };

  useEffect(() => {
    axios
      .post("https://edusources.nl/api/v1/materials/search/", body)
      .then((res) => {
        const response = res;
        var key = Object.keys(response)[0];
        setDefinition(response[key].extract);
      });
  });

  return (
    <div>
      <h2>{props.subject}</h2>
      <p>{definition}</p> source: Wikipedia
    </div>
  );
}
