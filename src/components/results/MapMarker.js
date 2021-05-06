import { React } from 'react';
import logo from "../../logo.svg";

const MapMarker = (link, title) => {
    return (
        <a href={link.link} target="_blank" rel="noreferrer">
        <img src={logo} width="20px" height="20px" alt="Marker" className="marker"/>
        </a>
    );
}

export default MapMarker