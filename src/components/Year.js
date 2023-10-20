import React from "react";

const Year = ({ year, text }) => {
  return (
    <div className="year">
      <h1>{year}</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default Year;
