import React from "react";

const Organ = ({
  id,
  vectorEffect,
  fill,
  stroke,
  d,
  fillOpacity,
  strokeOpacity,
  cursor,
}) => {
  return (
    <path
      id={id}
      vectorEffect={vectorEffect}
      fill={fill}
      stroke={stroke}
      d={d}
      fillOpacity={fillOpacity}
      strokeOpacity={strokeOpacity}
      cursor={cursor}
    ></path>
  );
};

export default Organ;
