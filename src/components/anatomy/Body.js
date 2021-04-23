import React, { useState } from "react";
import "./Body.css";
import Organ from "./Organ";

const Body = (props) => {
  //let w = window.innerWidth;
  //let h = window.innerHeight;
  const [organName, setOrganName] = useState("SELECT BODY PART");
  const [bgColor, setBgColor] = useState("gray");

  handleInputChange = (e) => {
    const name = e.target.name;
    setOrganName(name);
  };

  return (
    <div className="Body container mt-4">
      <div className="row">
        <div className="col-sm-6">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="90vw"
            height="90vh"
            viewBox="0 0 485 600"
          >
            <g id="regions">
              {props.organs.map((organ) => (
                <Organ
                  key={organ.id}
                  {...organ}
                  handleInputChange={(e) => handleInputChange(e)}
                />
              ))}
            </g>
          </svg>
        </div>
        <div className="col-sm-6 d-flex text-center justify-content-center align-items-center">
          <div className="card" style={{ width: "100%" }}>
            <div
              className="card-header"
              style={{ backgroundColor: { bgColor } }}
            >
              {organName}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
