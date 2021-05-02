import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
