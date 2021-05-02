import { React, useEffect, useState } from 'react';
import Menu from './Menu'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { setDemoToken } from '../store/AccessTokenStore';
import { getUserInfo } from '../services/UserService';

const Home = ({ user }) => {  

  const [state, setState] = useState({user})
  
  const setDemoUser = () => {
    setDemoToken()
  }

  useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])

  return (
    <>
    { state._id ? (<Menu />) :
    (<div className="Home">
            <header className="App-header pb-5">
              <img src={logo} className="App-logo" alt="logo" />
              <span className="text-center m-2">
              <small className="color--green">Welcome to</small>
              <h3 className="pb-4">Symptomapp</h3>
              <strong>Symptomapp</strong> offers a medical symptom checker primarily for patients. Based on the entered symptoms it tells the patient what possible diseases he has. It directs him to more medical information and shows the right doctor for further clarifications.
              </span>
              <><div className="row">
                  <Link to="/sign-up" className="App-link mt-3 mx-2"><Button className="button--primary">Register</Button></Link>
                  <Link to="/log-in" className="App-link mt-3 mx-2"><Button className="button--primary">Login</Button></Link>
                </div>
                <div className="row">
                  <Link to="/demo" className="App-link mt-3 mx-2"><Button className="button--secondary" onClick={setDemoUser}>Demo</Button></Link>
              </div>
              </>
            </header>
          </div>
    )}
    </>
  );
};

export default Home;
