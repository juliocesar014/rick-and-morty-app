import React from 'react';
import CharacterList from '../src/pages/CharactersList';
import CharacterDetails from '../src/pages/CharacterDetail';
import EpisodeList from '../src/pages/EpisodesList';
import EpisodeDetail from '../src/pages/EpisodeDetail';
import LocationDetail from '../src/pages/LocationDetail';
import LocationList from '../src/pages/LocationsList';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/episodes" element={<EpisodeList />} />
        <Route path="/episodes/:id" element={<EpisodeDetail />} />
        <Route path="/locations" element={<LocationList />} />
        <Route path="/locations/:id" element={<LocationDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;