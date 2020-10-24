import React from "react";
import EnginesData from "data";
import Select from "react-select";

const customStyles = {
  clearIndicator: () => ({}),
  container: () => ({}),
  control: () => ({}),
  dropdownIndicator: () => ({}),
  option: () => ({}),
  placeholder: () => ({}),
  singleValue: () => ({}),
};

// const customStyles = {
//   dropdownIndicator: () => ({
//     color: "green",
//   }),
//   placeholder: () => ({
//     color: "red",
//   }),
//   container: () => ({
//     border: "1px dotted black",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: "1px dotted pink",
//     color: state.isSelected ? "red" : "blue",
//     padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = "opacity 300ms";

//     return { ...provided, opacity, transition };
//   },
// };

const options = Object.entries(EnginesData).map(([key]) => ({
  value: key,
  label: key,
}));

const Chooser = () => (
  <Select styles={customStyles} options={options} menuIsOpen={true} />
);

Chooser.propTypes = {};

Chooser.defaultProps = {};

export default Chooser;
