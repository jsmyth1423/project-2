import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar is-black">
        <div className="conatiner">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/gamemain" className="navbar-item">
              Game
            </Link>
            <Link to="/agentsindex" className="navbar-item">
              Agents Index
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
