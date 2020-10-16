import React from 'react';
import './App.css';
import Search from "components/Search/Search"
import Engines from "components/Engines/Engines"
import Chooser from "components/Chooser/Chooser"

function App() {
  return (
    <div className="App">
      <Chooser />
      <Search />
      <Engines />
    </div>
  );
}

export default App;