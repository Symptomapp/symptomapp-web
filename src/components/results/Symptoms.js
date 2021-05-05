import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'

const Symptoms = ({symptomName}) => {
    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Selected symptom</Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Text className="h4 text-center">
                {symptomName}
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Symptoms