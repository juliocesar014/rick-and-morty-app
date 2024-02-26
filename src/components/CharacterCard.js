import React from 'react';

const CharacterCard = ({ character }) => {
  const cardStyle = {
    border: '1px solid black',
    margin: '10px', 
    padding: '10px',
    width: '400px',
    display: 'inline-block'
  };

  return (
    <div className="character-card" style={cardStyle}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Localização: {character.location.name}</p>
    </div>
  );
};

export default CharacterCard;
