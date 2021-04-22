import React, { useState } from "react";

const Organ = ({
  id,
  name,
  vectorEffect,
  fill,
  stroke,
  d,
  fillOpacity,
  strokeOpacity,
  cursor,
}) => {
  //   let w = window.innerWidth;
  //   let h = window.innerHeight;

  const [state, setState] = useState({ x: 0, y: 0 });
  const [inOrgan, setinOrgan] = useState(false);

  const handleMouseMove = (e) => {
    e.persist();
    //let currentTargetRect = e.currentTarget.getBoundingClientRect();

    setState((state) => ({
      ...state,
      x: e.clientX - e.nativeEvent.offsetX * 0.5,
      y: e.clientY - e.nativeEvent.offsetY * 0.5,
    }));
    setinOrgan(true);
    console.log({ name });
  };

  const handleMouseLeave = (e) => {
    e.persist();
    setinOrgan(false);
  };

  const handleOnClick = (e) => {
    e.persist();
  };

  return (
    <React.Fragment>
      <path
        className={name}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleOnClick}
        id={id}
        name={name}
        vectorEffect={vectorEffect}
        fill={fill}
        stroke={stroke}
        d={d}
        fillOpacity={fillOpacity}
        strokeOpacity={strokeOpacity}
        cursor={cursor}
      ></path>
      {inOrgan && (
        <svg className={`circle-${name}`}>
          <g>
            <circle
              cx={state.x}
              cy={state.y}
              r="40"
              stroke="black"
              strokeWidth="3"
              fill={fill}
              fillOpacity="0.5"
            ></circle>
            <text
              x={state.x}
              y={state.y}
              textAnchor="middle"
              stroke="black"
              strokeWidth="0.05rem"
              dy=".3em"
            >
              {name}
            </text>
          </g>
        </svg>
      )}
    </React.Fragment>
  );
};

export default Organ;
