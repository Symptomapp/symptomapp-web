import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'
import data from '../../data/medicalCenters.json'

const MapCanvas = () => {

    const defaultProps = {
        center: {
        lat: 40.418936897871724,
        lng: -3.6716873227221694
        },
        zoom: 14
    };

    const Markers = data.map((element) => 
        <MapMarker
            lat={element.location.latitude}
            lng={element.location.longitude}
            title={element.title}
            link={element.relation}
        />
    )

    return (
        <>
        <Card className="results--card">
            <Card.Header className="results---card--header">
                <Card.Title>Map</Card.Title>
            </Card.Header>
            <Card.Body>
            <Card.Text>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBXNl0wM-dy4MvRFRZZgUV8BczVjW7lKpM' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
                    {Markers}
                    </GoogleMapReact>
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
        
        </>
    );
}

export default MapCanvas


// { data.forEach(element => 
//                         <MapMarker
//                             lat={element.location.latitude}
//                             lng={element.location.longitude}
//                             title={element.title}
//                             link={element.relation}
//                         />
//                     )}