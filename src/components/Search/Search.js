import React from "react";
import Chooser from "components/Chooser/Chooser";
import EnginesData from "data";

const chooserOptions = Object.entries(EnginesData).map(([key]) => ({
  value: key,
  label: key,
}));

const defaultKey = "DuckDuckGo"
let queryURL = EnginesData[defaultKey];

function handleChange(e) {
  document.getElementById("term").focus();
  const key = e.value;
  queryURL = EnginesData[key];
}

function search() {
  console.log("queryURL = " + queryURL);
  console.log("search");
}

const chooserDefaultValue = { label: defaultKey, value: defaultKey };
const Search = () => (
  <div id="search">
    <Chooser
      options={chooserOptions}
      defaultValue={chooserDefaultValue}
      onChange={handleChange}
      autoFocus
    />{" "}
    <input id="term" type="text" /> <button onClick={search}>Search</button>
  </div>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
