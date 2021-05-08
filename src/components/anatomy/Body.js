import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import Organ from "./Organ";
import { getBodySymptoms } from "../../services/Apimedic/ApimedicService";


const Body = ({ organs }) => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  const [organName, setOrganName] = useState("SELECT BODY PART");
  const [symptoms, setSymptoms] = useState(
    "Select body part to display symptoms"
  );
  const [bgColor, setBgColor] = useState("red");
  const [isOuter, setOuter] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);

  const ref = useRef();
  // const wrapperRef = useRef();
  // const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    organs.some((element) => element.name === "Chest")
      ? setOuter(true)
      : setOuter(false);
  }, [organs]);

  useEffect(() => {
    let refDimensions = ref.current.getBoundingClientRect();
    setCurrentWidth(refDimensions.width * 0.9);
    setCurrentHeight(refDimensions.height * 0.9);
  }, [ref.current]);

  
  const handleInputChange = (e) => {
    const name = e.target.attributes.name.value;
    const fill = e.target.attributes.fill.value;
    getBodySymptoms(Number(e.target.attributes.locationid.value)).then((d) =>
      setSymptoms(d)
    );

    setOrganName(name);
    setBgColor(fill);
  };

  return (
    <div className="Body container h-100 mt-4">
      <div className="row h-100">
        <div className="Body__container col-sm-6">
          <div ref={ref} className="Body__wrapper">
            <svg
              align="center"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${isOuter? 500 : 400} ${isOuter? 800 : 700}`}
              className="svg-content"
              preserveAspectRatio="xMidYMid meet"
            >
              {organs.map((organ) => (
                <Organ
                  key={organ.id}
                  {...organ}
                  handleInputChange={(e) => handleInputChange(e)}
                />
              ))}
            </svg>
          </div>
        </div>
        <div className="Symptoms__container col-sm-6">
          <div className="card" style={{ width: "95%" }}>
            <div className="card-header" style={{ backgroundColor: bgColor }}>
              {organName}
            </div>
            <ul className="list-group list-group-flush">
              {symptoms === "Select body part to display symptoms" ? (
                <li className="list-group-item">{"symptoms"}</li>
              ) : ( symptoms.length === 0 ?
                (<Link
                    to={`/results/0/No symptom found`}
                    className="list-group-item"
                  >
                    {" "}
                    {`No symptom found for ${organName}`}
                  </Link>) :
                symptoms.map((symptom, i) => (
                  <Link
                    to={`/results/${symptom.ID}/${symptom.Name}`}
                    key={symptom.ID}
                    className="list-group-item"
                  >
                    {" "}
                    {symptom.Name}
                  </Link>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
