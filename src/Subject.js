import React from "react";
import { useParams } from "react-router-dom";
import Definition from "./Definition";
import MoocOverview from "./MoocOverview";
import StudentPresentations from "./StudentPresentations";
import KnowledgeWithinOrg from "./KnowledgeWithinOrg";
import "./Subject.css";

export default function Subject() {
  const { subject } = useParams();

  return (
    <div className="flex-container">
      <div className="flex-item" id="definition">
        <Definition subject={subject} />
      </div>
      <div className="flex-item" id="edu">
        <MoocOverview subject={subject} />
      </div>
      <div className="flex-item" id="twitter">
        <StudentPresentations subject={subject} />
      </div>
      <div className="flex-item" id="scholar">
        <KnowledgeWithinOrg subject={subject} />
      </div>
    </div>
  );
}
