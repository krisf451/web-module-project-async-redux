import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import DisplayCarousel from "./components/DisplayCarousel";
import Person from "./components/Person";

function App() {
  return (
    <div className="app">
      <Navigation />
      <DisplayCarousel />
      <Person />
    </div>
  );
}

export default App;
