import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Dashboard from "../views/Dashboard";
import About from "../views/about/About";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function Container() {
  return (
    <div className="main-wrapper">
      <Router>
        <SideMenu />
        <Header />
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Container;
