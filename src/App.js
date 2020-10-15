import React from 'react';
import './App.css';
import Search from "components/Search/Search"
import Engines from "components/Engines/Engines"
import Chooser from "components/Chooser/Chooser"

function App() {
  return (
    <div className="App">
      <Search />
      <Chooser />
      <Engines />
    </div>
  );
}

export default App;