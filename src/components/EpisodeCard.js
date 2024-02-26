import React from 'react';

const EpisodeCard = ({ episode }) => {
    const cardStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        width: '400px',
        display: 'inline-block'
    };
    return (
        <div className="episode-card" style={cardStyle}>
            <h2>{episode.name}</h2>
            <p>Data de Estreia: {episode.air_date}</p>
        </div>
    );
};

export default EpisodeCard;
