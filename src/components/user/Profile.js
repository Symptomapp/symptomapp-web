import { React, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { logout } from '../../store/AccessTokenStore';
import { getUserInfo } from '../../services/UserService';
import Loader from '../Loader'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import API_URL from '../../constants/constants'

const axios = require('axios').default;

const Profile = ({user}) => {

    const [state, setState] = useState({user})

    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(true);

    const setLoaded = () => setLoading(false);

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
        .then(user => {
            setState(user);
            setLoaded()
            }
        )
    }, [])
   
    return (
            <>
            { (loading) ? (<Loader />) : ('') }
            <div className="container mt-5 text-center">

            <Card className="profile--card mx-3">
                <Card.Body>
                    <Card.Title><img src={state.picture} className="profile--picture" alt={state.name}/></Card.Title>
                    <Card.Text>
                    <strong className="profile--data"><i className="fas fa-tags mr-1"></i> {state.name}  {state.surname} </strong>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="profile--row"><p className="profile--data mb-0"><small><i className="fas fa-envelope mr-1"></i></small> {state.email}</p></ListGroupItem>
                    <ListGroupItem className="profile--row profile--card--item"><p className="profile--data mb-0"><small><i className="fas fa-venus-mars mr-1"></i></small> {state.sex}</p></ListGroupItem>
                    <ListGroupItem className="profile--row"><div className="profile--data"><small><i className="fas fa-map-marker-alt mr-1"></i></small> {state.city}</div></ListGroupItem>
                </ListGroup>
                </Card>


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
        </>
    );
}

export default Profile