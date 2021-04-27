import React, { useState, useEffect, useRef } from "react";
import "./Body.css";
import Organ from "./Organ";

const Body = ({ organs }) => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  const [organName, setOrganName] = useState("SELECT BODY PART");
  const [bgColor, setBgColor] = useState("red");
  const [isOuter, setOuter] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    organs.some((element) => element.name === "Chest")
      ? setOuter(true)
      : setOuter(false);
  }, [organs]);

  useEffect(() => {
    let refDimensions = ref.current.getBoundingClientRect();
    setCurrentWidth(refDimensions.width * 0.1);
    setCurrentHeight(refDimensions.width * 0.05);
  }, [ref.current]);

  const handleInputChange = (e) => {
    const name = e.target.attributes.name.value;
    const fill = e.target.attributes.fill.value;

    setOrganName(name);
    setBgColor(fill);
  };

  return (
    <div className="Body container mt-4">
      <div className="row">
        <div className="Body__container col-sm-6 d-flex text-center justify-content-center align-items-center">
          <svg
            ref={ref}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="90vw"
            height="90vh"
            viewBox={`0 0 ${h * 0.9} ${w * 0.9}`}
          >
            <g
              className="organ_group"
              transform={`scale(${isOuter ? 0.9 : 2})`}
            >
              <g
                className="organ_subgroup"
                transform={`translate(${
                  isOuter ? `${currentWidth},${currentHeight}` : "0,0"
                })`}
              >
                {organs.map((organ) => (
                  <Organ
                    key={organ.id}
                    {...organ}
                    handleInputChange={(e) => handleInputChange(e)}
                  />
                ))}
              </g>
            </g>
          </svg>
        </div>
        <div className="Symptoms__container col-sm-6 d-flex text-center justify-content-center align-items-center">
          <div className="card" style={{ width: "95%" }}>
            <div className="card-header" style={{ backgroundColor: bgColor }}>
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
