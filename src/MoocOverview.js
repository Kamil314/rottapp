import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoocOverview(props) {
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
      <h2>Recommended MOOC's about: {props.subject}</h2>
      <div className="course">
        <h5>Introduction to NoSQL Databases (Coursera)</h5>
        <p>
          This course will provide you with technical hands-on knowledge of
          NoSQL databases and Database-as-a-Service (DaaS) offerings. With the
          advent of Big Data and agile development methodologies, NoSQL
          databases have gained a lot of relevance in the database landscape.
          Their main advantage is the ability to effectively handle scalability
          and flexibility issues raised by modern applications.
        </p>
        <a href="https://www.w3schools.com">Click here for the MOOC course</a>
      </div>
      <div className="course">
        <h5>
          Amazon DynamoDB: Building NoSQL Database-Driven Applications
          (Coursera)
        </h5>
        <p>
          This course introduces you to NoSQL databases and the challenges they
          solve. Expert instructors will dive deep into Amazon DynamoDB topics
          such as recovery, SDKs, partition keys, security and encryption,
          global tables, stateless applications, streams, and best practices.
        </p>
        <a href="https://www.w3schools.com">Click here for the MOOC course</a>
      </div>
      <div className="course">
        <h5>Introduction to NoSQL Data Solutions (edX)</h5>
        <p>
          Introduction to NoSQL Data Solutions (edX) Start Date … assessments,
          and a final exam, join the experts to learn NoSQL basics, and how
          NoSQL has evolved over time
        </p>
        <a href="https://www.w3schools.com">Click here for the MOOC course</a>
      </div>
      <div className="course">
        <h5>NoSQL, Big Data, and Spark Foundations Specialization</h5>
        <p>
          Springboard your Big Data career. Master fundamentals of NoSQL, Big
          Data, and Apache Spark with hands-on job-ready skills in machine
          learning and data engineering.
        </p>
        <a href="https://www.w3schools.com">Click here for the MOOC course</a>
      </div>
      <div className="course">
        <h5>Introduction to MongoDB</h5>
        <p>
          This course will get you up and running with MongoDB quickly, and
          teach you how to leverage its power for data analytics.
        </p>
        <a href="https://www.w3schools.com">Click here for the MOOC course</a>
      </div>
      <div className="course">
        <h5>Database Architecture, Scale, and NoSQL with Elasticsearch</h5>
        <p>
          In this fourth and final course in PostgreSQL for Everybody, learners
          will explore databses architectures, CRUD operations and how ACID
          requirements are implemented in PostgreSQL
        </p>
        <a href="https://www.w3schools.com">Click here for the MOOC course</a>
      </div>
    </div>
  );
}
