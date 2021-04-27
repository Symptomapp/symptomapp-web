import "./App.css";
import Body from "./components/anatomy/Body";
import innerOrgans from "./data/inner_body.json";
import outterOrgans from "./data/outter_body.json";
import face from "./data/face.json";
import { React, useEffect, useState } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import { getUserInfo } from "./services/UserService";
import { getAccessToken } from "./store/AccessTokenStore";
import Router from "./components/Router";

let App = () => {
  const [user, setUser] = useState(null);

  const getUser = (userId) => {
    return getUserInfo(userId).then((response) => setUser(response));
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser(window.localStorage.userId);
    }
  }, []);

  return (
    <div className="App">
      <Navigation user={user} />
      <Router />
    </div>
  );
};

export default App;
