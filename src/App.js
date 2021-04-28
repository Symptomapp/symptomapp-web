import { React, useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navbar'
import Router from './components/Router'
import Footer from './components/Footer'
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
