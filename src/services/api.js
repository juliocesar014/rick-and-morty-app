import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/character`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

export const getEpisodes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/episode`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching episodes:', error);
        throw error;
    }
};

export const getCharacterById = async (characterId) => {
    try {
        const response = await axios.get(`${BASE_URL}/character/${characterId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching character with ID ${characterId}:`, error);
        throw error;
    }
};

export const getEpisodeById = async (episodeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/episode/${episodeId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching episode with ID ${episodeId}:`, error);
        throw error;
    }
};


export const getCharactersByEpisode = async (episodeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/episode/${episodeId}`);
        const characterIds = response.data.characters.map(url => url.split('/').pop());
        const charactersPromises = characterIds.map(id => getCharacterById(id));
        const charactersData = await Promise.all(charactersPromises);
        return charactersData;
    } catch (error) {
        console.error(`Error fetching characters in episode ${episodeId}:`, error);
        throw error;
    }
};


export const getLocations = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/location`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
}

export const getLocationById = async (locationId) => {
    try {
        const response = await axios.get(`${BASE_URL}/location/${locationId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching location with ID ${locationId}:`, error);
        throw error;
    }
};

export const getCharactersByLocation = async (locationId) => {
    try {
        const response = await axios.get(`${BASE_URL}/location/${locationId}`);
        const residentUrls = response.data.residents;
        const characterIds = residentUrls.map(url   => url.split('/').pop());
        return characterIds;
    } catch (error) {
        console.error(`Error fetching characters in location ${locationId}:`, error);
        throw error;
    }
};