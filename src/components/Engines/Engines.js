import React from "react";
import "./Engines.css";
import { enginesData } from "data";
import Engine from "components/Engine/Engine";

const Engines = () => {
  function handleClick() {
    console.log("got here");
  }
  return (
    <div className="Engines">
      {Object.keys(enginesData).map((key, index) => (
        <Engine
          value={enginesData[key]}
          title={key}
          onClick={(i) => this.handleClick(i)}
        />
      ))}
    </div>
  );
};

Engines.propTypes = {};

Engines.defaultProps = {};

export default Engines;
