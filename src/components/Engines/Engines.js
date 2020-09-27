import React from 'react';
import './Engines.css';
import { enginesData } from 'data';
import Engine from "components/Engine/Engine"

const Engines = () => (
    <div className="Engines">
          {
        Object.keys(enginesData).map((key, index) => ( 
          <span>{key}:{enginesData[key]}</span> 
        ))
      }
  </div>
);

Engines.propTypes = {};

Engines.defaultProps = {};

export default Engines;