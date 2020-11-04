import React from "react";
import Chooser from "components/Chooser/Chooser";
import EnginesData from "data";

const chooserOptions = Object.entries(EnginesData).map(([key]) => ({
  value: key,
  label: key,
}));

const chooserDefaultValue = { label: "DuckDuckGo", value: "DuckDuckGo" };

function handleSelect(e) {
  document.getElementById("term").focus();
}

function search() {
  console.log("search");
}

const Search = () => (
  <div id="search">
    <Chooser
      options={chooserOptions}
      defaultValue={chooserDefaultValue}
      onChange={handleSelect}
      autoFocus
    />{" "}
    <input id="term" type="text" /> <button onClick={search}>Search</button>
  </div>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
