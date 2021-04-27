import { React, useEffect, useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { logout } from '../store/AccessTokenStore';
import { getUserInfo } from '../services/UserService'

const axios = require('axios').default;

const Profile = ({user}) => {

    const [state, setState] = useState({user})

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
  }, [])

   

    return (
        <div className="container mt-5">
            <div>{state.name}</div>
            <div>{state.surname}</div>
            <div>{state.email}</div>
            <div><img src={state.name} alt={state.name}/></div>
            <div>{state.sex}</div>
            <div>{state.city}</div>
            <Link to="/log-out" className="App-link mt-3" onClick={logout}><Button className="button--secondary">Logout</Button></Link>
        </div>
    );
}

export default Profile