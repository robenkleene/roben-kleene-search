import React from "react";
import "./Engine.css";

const Engine = (props) => (
  <button className="Engine" value={props.value} onClick={props.onClick}>
    {props.title}
  </button>
);

Engine.propTypes = {};

Engine.defaultProps = {};

export default Engine;
