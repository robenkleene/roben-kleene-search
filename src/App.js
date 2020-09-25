import React from 'react';
import './App.css';
import Search from "components/Search/Search"
import Engines from "components/Engines/Engines"

function App() {
  return (
    <div className="App">
      <Search />
      <Engines />
    </div>
  );
}

export default App;