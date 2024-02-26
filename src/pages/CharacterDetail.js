import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/api';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const characterData = await getCharacterById(id);
        setCharacter(characterData);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Origem: {character.origin.name}</p>
      <p>Localização: {character.location.name}</p>
      <h3>Episódios:</h3>
      <ul>
        {character.episode.map((episode, index) => (
          <li key={index}>{episode}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetails;
