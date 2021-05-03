import { React, useEffect, useState } from 'react';
import Symptoms from './Symptoms';
import Diagnosys from './Diagnosys';
import Advertising from './Advertising';
import Map from './Map';
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
                <Diagnosys />
                <Advertising />
                <Map />
            </CardDeck>
        </div>
    );
}

export default Results