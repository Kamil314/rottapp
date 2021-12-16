import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function KnowledgeWithinOrg(props) {
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
      <h2>Colleagues with knowledge about: {props.subject}</h2>
      <div className="teacher">
        <h5>Name: Albus Dumbledore</h5>
        <span>E-mail: albus.dumbledore@hogwarts.edu</span>
        <br />
        <span>
          Areas of expertise: Web Development, Backend Development, Databases
        </span>
        <br />
        <img
          src="/images/teacher-picture.jpeg"
          width="100"
          height="100"
          alt=""
        />
      </div>
      <div className="teacher">
        <h5>Name: Harry Potter</h5>
        <span>E-mail: harry.potter@hogwarts.edu</span>
        <br />
        <span>Areas of expertise: DevOps, IoT, Databases</span>
        <br />
        <img
          src="/images/teacher-picture.jpeg"
          width="100"
          height="100"
          alt=""
        />
      </div>
      <div className="teacher">
        <h5>Name: Ron Weasley</h5>
        <span>E-mail: ron.weasley@hogwarts.edu</span>
        <br />
        <span>Areas of expertise: Big data, Machine Learning, Databases</span>
        <br />
        <img
          src="/images/teacher-picture.jpeg"
          width="100"
          height="100"
          alt=""
        />
      </div>
      <div className="teacher">
        <h5>Name: Rubeus Hagrid</h5>
        <span>E-mail: rubeus.hagrid@hogwarts.edu</span>
        <br />
        <span>
          Areas of expertise: Cloud Migrations, Backend Development, Databases
        </span>
        <br />
        <img
          src="/images/teacher-picture.jpeg"
          width="100"
          height="100"
          alt=""
        />
      </div>
      <div className="teacher">
        <h5>Name: Hermione Granger</h5>
        <span>E-mail: hermione.granger@hogwarts.edu</span>
        <br />
        <span>
          Areas of expertise: Cloud Migrations, Backend Development, Databases
        </span>
        <br />
        <img
          src="/images/teacher-picture.jpeg"
          width="100"
          height="100"
          alt=""
        />
      </div>
    </div>
  );
}
