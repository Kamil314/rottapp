import React from "react";
import { useParams } from "react-router-dom";
import Definition from "./Definition";
import EduSource from "./EduSource";
import TwitterFeed from "./TwitterFeed";
import GoogleScholar from "./GoogleScholar";
import "./Subject.css";


export default function Subject() {
  const { subject } = useParams();

  return (
    <div className="flex-container">
      <div className="flex-item" id="definition"><Definition subject={subject} /></div>
      <div className="flex-item" id="edu"><EduSource subject={subject} /></div>
      <div className="flex-item" id="twitter"><TwitterFeed subject={subject} /></div>
      <div className="flex-item" id="scholar"><GoogleScholar subject={subject} /></div>    
    </div>
  );
}
