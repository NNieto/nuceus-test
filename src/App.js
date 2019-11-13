import React from "react";
import { createBrowserHistory } from "history";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import Home from './views/Home.jsx';
import Person from './views/Person.jsx';

const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={Home}
        />
        <Route
          exact
          path={"/person/:username"}
          component={Person}
        />
        <Redirect to={"/"} />
      </Switch>
    </Router>
  );
}

export default App;
