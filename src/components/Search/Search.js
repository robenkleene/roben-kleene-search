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

function search(e) {
  const term = document.getElementById("term").value
  const url = queryURL.replace(/%s/, encodeURIComponent(term));
  e.preventDefault();
  window.location.href = url;
}

const chooserDefaultValue = { label: defaultKey, value: defaultKey };
const Search = () => (
  <form id="search" onSubmit={search}>
    <Chooser
      options={chooserOptions}
      defaultValue={chooserDefaultValue}
      onChange={handleChange}
      autoFocus
    />{" "}
    <input id="term" type="text" /> <input type="submit" value="Search" />
  </form>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
