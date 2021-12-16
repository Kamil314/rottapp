import React from "react";

export default function StudentPresentations(props) {
  return (
    <div>
      <h2>Presentations from students about: {props.subject}</h2>
      <div className="container">
        <div className="presentation">
          <img
            src="/images/powerpoint_logo.png"
            width="50"
            height="50"
            alt=""
          />
          <p>Title: Implementation of NoSQL in the aviation industry</p>
          <p>Semester: OOSE</p>
          <p>Author: Doorn Roosje</p>
        </div>
        <div className="presentation">
          <img
            src="/images/powerpoint_logo.png"
            width="50"
            height="50"
            alt=""
          />
          <p>Title: Scalability of NoSQL databases</p>
          <p>Semester: ISBR</p>
          <p>Author: Donald Duck</p>
        </div>
        <div className="presentation">
          <img
            src="/images/powerpoint_logo.png"
            width="50"
            height="50"
            alt=""
          />
          <p>Title: Comparisons of Databases as a Service</p>
          <p>Semester: WA</p>
          <p>Author: Peter Pan</p>
        </div>
        <div className="presentation">
          <img
            src="/images/powerpoint_logo.png"
            width="50"
            height="50"
            alt=""
          />
          <p>Title: To SQL or NoSQL?</p>
          <p>Semester: AD</p>
          <p>Author: Dagobert Duck</p>
        </div>
        <div className="presentation">
          <img
            src="/images/powerpoint_logo.png"
            width="50"
            height="50"
            alt=""
          />
          <p>Title: Use cases of NoSQL databases</p>
          <p>Semester: ROTT</p>
          <p>Author: Peter Pan</p>
        </div>
      </div>
    </div>
  );
}
