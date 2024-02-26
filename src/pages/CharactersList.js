import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import { getCharacters } from '../services/api';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const charactersData = await getCharacters();
          setCharacters(charactersData);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
  
      fetchCharacters();
    }, []);
  
    return (
      <div className="character-list">
        <h1>Character List</h1>
        <div className="characters">
          {characters.map(character => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default CharacterList;