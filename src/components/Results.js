import { React, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { logout } from '../store/AccessTokenStore';
import { getUserInfo } from '../services/UserService';
import API_URL from '../constants/constants'

const axios = require('axios').default;

const Results = ({user}) => {

    const [state, setState] = useState({user})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        axios.get(`${API_URL}/users/delete/${state._id}/${state.token}`)
        .then(handleClose())
        .then(logout())
        .catch()
    }

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])
   
    return (
            <div className="container mt-5 text-center">
            <div><img src={state.picture} className="profile--picture" alt={state.name}/></div>
            <div className="profile--data"><small><i className="fas fa-tags mr-1"></i></small> {state.name}</div>
            <div className="profile--data"><small><i className="fas fa-tags mr-1"></i></small> {state.surname}</div>
            <div className="profile--data"><small><i className="fas fa-envelope mr-1"></i></small> {state.email}</div>
            <div className="profile--data"><small><i className="fas fa-venus-mars mr-1"></i></small> {state.sex}</div>
            <div className="profile--data mb-3"><small><i className="fas fa-map-marker-alt mr-1"></i></small> {state.city}</div>
            <Button onClick={logout} className="button--primary mt-3 mx-2"><small><i className="fas fa-sign-out-alt"></i></small> Logout</Button>
            <Link to="/profile/edit"><Button className="button--primary mt-3 mx-2"><small><i className="fas fa-edit"></i></small> Edit profile</Button></Link>
            <Button onClick={handleShow} className="button--secondary mt-3 mx-2"><small><i className="fas fa-trash-alt"></i></small> Delete profile</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{state.name}, are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Do you really want to delete your profile. This action can't be reverted.
                </Modal.Body>
                <Modal.Footer>
                <Button className="button--primary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button className="button--secondary" onClick={handleDelete}>Delete profile</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Results