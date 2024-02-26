import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEpisodes } from '../services/api';
import EpisodeCard from '../components/EpisodeCard';


const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const episodesData = await getEpisodes();
        setEpisodes(episodesData);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div className="episode-list">
      <h1>Lista de Episódios</h1>
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
