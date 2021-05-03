import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getUserInfo } from '../../services/UserService';

const Map = ({user}) => {

    const [state, setState] = useState({user})

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])
   
    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Map</Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Text>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12149.985246609158!2d-3.6700922932928957!3d40.42000778902448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228aed26288b7%3A0xf3d3fe114341e1fd!2sHospital%20General%20Universitario%20Gregorio%20Mara%C3%B1%C3%B3n!5e0!3m2!1ses!2ses!4v1620046096167!5m2!1ses!2ses" width="100%" height="100%" allowfullscreen="" loading="lazy" style={{border:0}}></iframe>
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Map