import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLocationById, getCharactersByLocation, getCharacterById } from '../services/api';

const LocationDetail = () => {
    const { id } = useParams();
    const [location, setLocation] = useState(null);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationData = await getLocationById(id);
                setLocation(locationData);

                const characterIds = await getCharactersByLocation(id);
                const charactersData = await Promise.all(characterIds.map(characterId => getCharacterById(characterId)));
                setCharacters(charactersData);
            } catch (error) {
                console.error(`Error fetching location or characters:`, error);
            }
        };

        fetchData();
    }, [id]);

    if (!location) {
        return <div>Loading...</div>;
    }

    return (
        <div className="location-detail" style={styles.locationDetail}>
            <h2 style={styles.heading}>{location.name}</h2>
            <p style={styles.text}>Tipo: {location.type}</p>
            <p style={styles.text}>Dimensão: {location.dimension}</p>
            <h3 style={styles.subHeading}>Personagens nesta localização:</h3>
            <ul style={styles.characterList}>
                {characters.map(character => (
                    <li key={character.id} style={styles.characterItem}>
                        <Link to={`/character/${character.id}`} style={styles.characterLink}>
                            <img src={character.image} alt={character.name} style={styles.characterImage} />
                            <span style={styles.characterName}>{character.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationDetail;

const styles = {
    locationDetail: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    text: {
        marginBottom: '8px',
    },
    subHeading: {
        marginBottom: '10px',
    },
    characterList: {
        listStyleType: 'none',
        padding: '0',
    },
    characterItem: {
        marginBottom: '10px',
    },
    characterLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#333',
    },
    characterImage: {
        width: '50px',
        height: '50px',
        marginRight: '10px',
        borderRadius: '50%',
    },
    characterName: {
        fontSize: '16px',
    },
};
