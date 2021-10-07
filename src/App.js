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

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <DisplayCarousel />
        {/* <Person /> */}
        <div>
          <NavLink className="links" exact to="/conways">
            Conways
          </NavLink>
          <NavLink className="links" exact to="/person">
            Generate Random Person
          </NavLink>
          <NavLink to="/item-list">Shop</NavLink>
        </div>
        <Switch>
          <Route path="/person">
            <Person />
          </Route>
          {/* <Route exact path="/" component={Person}>
            <Person />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
