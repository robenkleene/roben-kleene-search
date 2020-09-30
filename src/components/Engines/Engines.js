import React from "react";
import "./Engines.css";
import { enginesData } from "data";
import Engine from "components/Engine/Engine";

const Engines = () => {
  function handleClick(value) {
    console.log("value", value);
  }
  return (
    <div className="Engines">
      {Object.keys(enginesData).map((key, index) => (
        <Engine
          value={enginesData[key]}
          title={key}
          onClick={(value) => handleClick(value)}
        />
      ))}
    </div>
  );
};

Engines.propTypes = {};

Engines.defaultProps = {};

export default Engines;
