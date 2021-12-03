import React from "react";
import { useParams } from "react-router-dom";

export default function Subject() {
  const { subject } = useParams();
  console.log(subject);
  return <div>Hi {subject}</div>;
}
