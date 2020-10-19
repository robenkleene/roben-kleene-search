import React from "react";
import { enginesData } from "data";
import Select, { NonceProvider } from "react-select";

const customStyles = {
  dropdownIndicator: () => ({
    color: 'green',
  }),
  placeholder: () => ({
    color: 'red',
  }),
  container: () => ({
    border: '1px dotted black',
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const test = Object.assign({}, ...Object.entries(enginesData).map(([key]) => ({ [key]: key })));
console.log("test = " + JSON.stringify(test));
console.log("options = " + JSON.stringify(options));

const Chooser = () => <Select styles={customStyles} options={options} />;

Chooser.propTypes = {};

Chooser.defaultProps = {};

export default Chooser;