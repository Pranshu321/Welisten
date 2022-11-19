import React from "react";
import AboutUs from "./components/AboutUs";
import DailyPrices from "./components/DailyPrices";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Roadmap from "./components/Roadmap";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
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
