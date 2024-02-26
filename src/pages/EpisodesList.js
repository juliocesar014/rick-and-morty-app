import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEpisodes } from '../services/api';
import EpisodeCard from '../components/EpisodeCard';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await getEpisodes(page);
        setEpisodes(response.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="episode-list">
      <h1>Lista de Episódios</h1>
      <div>
        <button onClick={prevPage} disabled={page === 1}>Anterior</button>
        <span>Página {page}</span>
        <button onClick={nextPage}>Próxima</button>
      </div>
      <div className="episodes">
        {episodes.map(episode => (
          <Link key={episode.id} to={`/episodes/${episode.id}`}>
            <EpisodeCard episode={episode} />
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default EpisodeList;
