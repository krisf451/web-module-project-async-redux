import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import DisplayCarousel from "./components/DisplayCarousel";
import Person from "./components/Person";
import Form from "./components/Form";
import Conways from "./components/Conways";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <DisplayCarousel />
        {/* <Person /> */}
        <div>
          <NavLink className="links" exact to="/">
            Home
          </NavLink>
          <NavLink className="links" exact to="/conways">
            Conways
          </NavLink>
          <NavLink className="links" exact to="/person">
            Generate Random Person
          </NavLink>
        </div>
        <Switch>
          <Route path="/person">
            <Person />
          </Route>
          <Route path="/conways">
            <Conways />
          </Route>
          <Route exact path="/">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
