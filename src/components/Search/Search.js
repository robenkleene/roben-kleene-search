import React from "react";
import Chooser from "components/Chooser/Chooser";

const Search = () => (
  <div id="search">
    <Chooser /> <input type="text" autoFocus="autoFocus" />{" "}
    <button>Search</button>
  </div>
);

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
