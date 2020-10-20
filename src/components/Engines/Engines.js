import React from "react";
import enginesData from "data";
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
          key={key}
          title={key}
          onClick={() => handleClick(enginesData[key])}
        />
      ))}
    </div>
  );
};

Engines.propTypes = {};

Engines.defaultProps = {};

export default Engines;
