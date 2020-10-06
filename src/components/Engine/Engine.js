import React from "react";
import styled from 'styled-components'
import "./Engine.css";

const Button = styled.button`
  cursor: pointer;
`;

const Engine = (props) => (
  <Button className="Engine" value={props.value} onClick={props.onClick}>
    {props.title}
  </Button>
);

Engine.propTypes = {};

Engine.defaultProps = {};

export default Engine;
