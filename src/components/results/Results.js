import { React, useEffect, useState } from 'react';
import Symptoms from './Symptoms';
import Diagnosis from './Diagnosis';
import Advertising from './Advertising';
import MapCanvas from './Map';
import CardDeck from 'react-bootstrap/CardDeck'
import { getUserInfo } from '../../services/UserService';

const Results = ({user}) => {

    const [state, setState] = useState({user})

    useEffect(() => {
        getUserInfo(window.localStorage.userId)
        .then(user => setState(user))
    }, [])
   
    return (
        <div className="container m-3 mx-auto">
            <CardDeck className="mb-5">
                <Symptoms />
                <Diagnosis />
                <Advertising />
                <MapCanvas />
            </CardDeck>
        </div>
    );
}

export default Results