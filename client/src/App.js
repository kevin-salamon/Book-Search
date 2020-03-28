import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Oops from "./pages/404";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Oops} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App;
