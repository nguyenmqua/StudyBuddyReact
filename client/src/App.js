import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/login"]}>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
