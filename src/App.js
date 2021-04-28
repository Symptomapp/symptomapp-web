import { React, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Register from './components/Register'
import Login from './components/Login'
import Navigation from './components/Navbar'
import Profile from './components/Profile'
import Edit from './components/Edit'
import { getUserInfo } from './services/UserService'
import { getAccessToken } from './store/AccessTokenStore';

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
    <Router>
      <Navigation user={user}/>
      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/log-in">
          <Login />
        </Route>
        <Route path="/profile/edit">
          <Edit user={user}/>
        </Route>
        <Route path="/profile">
          <Profile user={user}/>
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header m-1">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="mt-3">
                This will be the <strong>frontend</strong> for <strong>Symptomapp</strong> project.
              </p>
              <Link to={{ pathname: "https://github.com/Symptomapp" }} target="_blank" className="App-link"><i className="fab fa-github"> </i> Symptomapp on Github</Link>
              { user ? "" : <div className="row">
              <Link to="/sign-up" className="App-link mt-3 mx-2"><Button className="button--primary">Register</Button></Link>
              <Link to="/log-in" className="App-link mt-3 mx-2"><Button className="button--primary">Login</Button></Link>
              </div> }
            </header>
          </div>
        </Route>
      </Switch>
      <div className="footer"><small><i className="fas fa-stethoscope"></i> symptomapp 2021</small></div>
    </Router>
  );
};

export default App;
