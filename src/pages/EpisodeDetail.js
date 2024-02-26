import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEpisodeById, getCharactersByEpisode } from '../services/api';

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const episodeData = await getEpisodeById(id);
        setEpisode(episodeData);
      } catch (error) {
        console.error(`Error fetching episode with ID ${id}:`, error);
      }
    };

    const fetchCharactersInEpisode = async () => {
      try {
        const charactersData = await getCharactersByEpisode(id);
        setCharacters(charactersData);
      } catch (error) {
        console.error(`Error fetching characters in episode ${id}:`, error);
      }
    };

    fetchEpisodeDetails();
    fetchCharactersInEpisode();
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-detail">
      <h2>{episode.name}</h2>
      <p>Data de estreia: {episode.air_date}</p>
      <h3>Personagens no episódio:</h3>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} />
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeDetail;
