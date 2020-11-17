import React from "react";
import Select from "react-select";

// const customStyles = {
//   clearIndicator: () => ({}),
//   container: () => ({}),
//   control: () => ({}),
//   dropdownIndicator: () => ({}),
//   option: () => ({}),
//   placeholder: () => ({}),
//   singleValue: () => ({}),
// };

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

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "38px",
    width: "152px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "38px",
  }),
};

const Chooser = (props) => (
  <div style={{ display: "inline-block" }}>
    <Select
      styles={customStyles}
      options={props.options}
      defaultValue={props.defaultValue}
      autoFocus={props.autoFocus}
      onChange={props.onChange}
/>
  </div>
);
Chooser.propTypes = {};

Chooser.defaultProps = {};

export default Chooser;
