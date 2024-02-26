// LocationsList.js
import React, { useState, useEffect } from 'react';
import { getLocations } from '../services/api';
import LocationCard from '../components/LocationCard';

const LocationsList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await getLocations();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="locations-list">
      <h1>Lista de Localizações</h1>
      <div className="locations">
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />

        ))}
      </div>


    </div>
  );
};

export default LocationsList;
