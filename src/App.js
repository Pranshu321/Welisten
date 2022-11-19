import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Landing from "./Landing";
import Dashboard from "./components/Dashboard";
// import Landing from "./Landing";
import Homee from "./components/BlogPage/pages/Homee";
import Blog from "./components/BlogPage/pages/Blog";
import Error from "./components/BlogPage/pages/Error";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/blog"} component={Homee} />
        </Switch>
      </Router>
    </div>
  );
}
