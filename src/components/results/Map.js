import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapCanvas = () => {

    const defaultProps = {
        center: {
        lat: 40.418936897871724,
        lng: -3.6716873227221694
        },
        zoom: 14
    };

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
                    <AnyReactComponent
                        lat={40.418936897871724}
                        lng={-3.6716873227221694}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
        
        </>
    );
}

export default MapCanvas