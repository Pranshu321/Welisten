import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from "./Landing";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
