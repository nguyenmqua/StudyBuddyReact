import React, { useEffect, useState }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Newsfeed from "./pages/Newsfeed"
import { AuthContext } from "./context/auth";
import PrivateRoute from "./PrivateRoute"


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
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
          <PrivateRoute exact path={["/member/:id"]}>
            <Member />
          </PrivateRoute>
          <PrivateRoute exact path={["/newsfeed"]}>
            <Newsfeed />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
