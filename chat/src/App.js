import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { Auth, Home } from "./pages/indexPages.js";

const App = (props) => {
  const { isAuth } = props;

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route
            exact
            path={["/login", "/registration", "/registration/verify"]}
            component={Auth}
          />
          <Route
            path="/"
            render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
