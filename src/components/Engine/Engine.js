import React from 'react';
import PropTypes from 'prop-types';
import './Engine.css';

const Engine = (props) => (
  <div className="Engine" value={props.value}>
    {props.title}
  </div>
);

Engine.propTypes = {};

Engine.defaultProps = {};

export default Engine;
