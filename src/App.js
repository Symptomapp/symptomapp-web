import { React, useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navbar'
import Router from './components/Router'
import Footer from './components/Footer'
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

    <>
      <Navigation user={user}/>
      <Router />
      <Footer />
    </>

  );
};

export default App;
