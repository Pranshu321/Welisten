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
          <Route exact path="/">
            {/* <Route path="/" element={<Landing />} /> */}
            <Landing />
            {/* <Homee /> */}
          </Route>
          <Route exact path="/dashboard">
            <Route exact path="/Homee" element = {<Homee/>} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog/:id" element={<Blog />} />
            <Route exact path="/*" element={<Error />} />
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
