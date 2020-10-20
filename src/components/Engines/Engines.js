import React from "react";
import EnginesData from "data";
import Engine from "components/Engine/Engine";

const Engines = () => {
  function handleClick(value) {
    console.log("value", value);
  }
  return (
    <div className="Engines">
      {Object.keys(EnginesData).map((key, index) => (
        <Engine
          value={EnginesData[key]}
          key={key}
          title={key}
          onClick={() => handleClick(EnginesData[key])}
        />
      ))}
    </div>
  );
};

Engines.propTypes = {};

Engines.defaultProps = {};

export default Engines;
