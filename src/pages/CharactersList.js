import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../services/api';
import CharacterCard from '../components/CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters(page);
        setCharacters(response.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="character-list">
      <h1>Lista de Personagens</h1>
      <div>
        <button onClick={prevPage} disabled={page === 1}>Anterior</button>
        <span>Página {page}</span>
        <button onClick={nextPage}>Próxima</button>
      </div>
      <div className="characters">
        {characters.map(character => (
          <Link key={character.id} to={`/characters/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default CharacterList;
