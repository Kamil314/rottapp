import React from "react";
import { useParams } from "react-router-dom";
import Definition from "./Definition";
import TeachingMethods from "./TeachingMethods";

export default function Subject() {
  const { subject } = useParams();

  return (
    <div className="container">
      <Definition subject={subject} />
      <TeachingMethods subject={subject} />
    </div>
  );
}
