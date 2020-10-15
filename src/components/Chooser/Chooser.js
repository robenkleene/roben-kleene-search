import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Chooser = () => <Select options={options} />;

Chooser.propTypes = {};

Chooser.defaultProps = {};

export default Chooser;
