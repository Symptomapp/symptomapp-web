import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { setAccessToken } from '../store/AccessTokenStore';

const Home = () => {
  const user = null;

  const setDemoUser = () => {
    setAccessToken('6kcbyeoc37crahgscckz62gywbtlkp8ss3in9vvp2qb', '60896b3d72d2ef0c9b5a71e5')
  }

  return (
    <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="mt-3 text-center">
                This will be the <strong>frontend</strong> for <strong>Symptomapp</strong> project.
              </p>
              <Link to={{ pathname: "https://github.com/Symptomapp" }} target="_blank" className="App-link"><i className="fab fa-github"> </i> Symptomapp on Github</Link>
              { user 
              ? "" 
              : <><div className="row">
                  <Link to="/sign-up" className="App-link mt-3 mx-2"><Button className="button--primary">Register</Button></Link>
                  <Link to="/log-in" className="App-link mt-3 mx-2"><Button className="button--primary">Login</Button></Link>
                </div>
                <div className="row">
                  <Link to="/demo" className="App-link mt-3 mx-2"><Button className="button--secondary" onClick={setDemoUser}>Demo</Button></Link>
              </div>
              </> }
            </header>
          </div>
  );
};

export default Home;
