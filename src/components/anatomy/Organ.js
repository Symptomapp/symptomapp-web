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
  const [state, setState] = useState({ x: 0, y: 0 });
  const [inOrgan, setinOrgan] = useState(false);

  const handleMouseMove = (e) => {
    e.persist();
    let currentTargetRect = e.currentTarget.getBoundingClientRect();

    setState((state) => ({
      ...state,
      x: e.clientX - currentTargetRect.height,
      y: e.clientY - currentTargetRect.top,
    }));
    setinOrgan(true);
    console.log(state.x, state.y, e);
  };

  const handleMouseLeave = (e) => {
    e.persist();
    setinOrgan(false);
  };

  return (
    <React.Fragment>
      <path
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
        <svg>
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
