import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'

const axios = require('axios').default;


const Symptoms = ({symptomName}) => {

const [state, setState] = useState()

    useEffect(() => {
        axios.get(`https://dictionaryapi.com/api/v3/references/medical/json/${symptomName}?key=3d5a2207-dba0-44b8-971e-ea8258707f4c`)
        .then(r => {
            if (r.data[0].shortdef) {
                setState(r.data[0].shortdef.toString())
        }})
        .catch(setState(null))
    }, [symptomName])

    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Selected symptom</Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Text className="ext-center">
                <h1 className="mb-3">{symptomName}:</h1>
                <p className="font-weight-light font-italic">{state ? <span>{state}.</span> : 'No exact definition found.'}</p>
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Symptoms