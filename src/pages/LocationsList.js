import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from '../services/api';
import LocationCard from '../components/LocationCard';

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getLocations(page);
        setLocations(response.results);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="location-list">
      <h1>Lista de Localizações</h1>
      <div className="pagination-container">
        <button className="pagination-button" onClick={prevPage} disabled={page === 1}>Anterior</button>
        <span className="pagination-text">Página {page}</span>
        <button className="pagination-button" onClick={nextPage}>Próxima</button>
      </div>

      <div className="locations">
        {locations.map(location => (
          <Link key={location.id} to={`/locations/${location.id}`}>
            <LocationCard location={location} />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default LocationList;
