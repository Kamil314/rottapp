import React from "react";
import { useParams } from "react-router-dom";
import Definition from "./Definition";
import EduSource from "./EduSource";
import TwitterFeed from "./TwitterFeed";
import GoogleScholar from "./GoogleScholar";

export default function Subject() {
  const { subject } = useParams();

  return (
    <div className="container">
      <Definition subject={subject} />
      <EduSource subject={subject} />
      <TwitterFeed subject={subject} />
      <GoogleScholar subject={subject} />
    </div>
  );
}
