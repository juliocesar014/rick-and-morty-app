import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/characters">Personagens</Link>
        </li>
        <li>
          <Link to="/episodes">Episódios</Link>
        </li>
        <li>
          <Link to="/locations">Localizações</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
