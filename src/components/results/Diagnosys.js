import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getUserInfo } from '../../services/UserService';

const Diagnosys = ({user}) => {

    const [state, setState] = useState({user})

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])
   
    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Diagnosys</Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Diagnosys