import React from "react";
import "./Body.css";
import Organ from "./Organ";
import organs from "../../data/inner_body.json";

const Body = () => {
  return (
    <div className="Body">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="90vw"
        height="90vh"
        viewBox="0 0 485 509"
      >
        <g id="regions">
          {organs.map((organ) => (
            <Organ {...organ} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Body;
