import React from 'react';
import { Link } from 'react-router-dom';

const AgentCard = ({ uuid, displayName, displayIcon, description }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/agents/${uuid}`}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">{displayName}</h2>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={displayIcon} alt='displayIcon' />
            </figure>
          </div>
          <div className="card-content">
            <h5>{description}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AgentCard;