import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {
    const cardStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        width: '400px',
        display: 'inline-block'
    };
    return (
        <div className="location-card" style={cardStyle}>
            <h3>{location.name}</h3>
            <p>Tipo: {location.type}</p>
            <p>Dimensão: {location.dimension}</p>
            <Link to={`/locations/${location.id}`}>Detalhes</Link>
        </div>
    );
};

export default LocationCard;
