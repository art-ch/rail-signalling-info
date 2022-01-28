import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <h3 className="text">From Railfans for Railfans:</h3>
      <h1 className="text">Rail Signalling Info</h1>
      <p className="text">
        A unified place for information about railway signalling systems around
        the world
      </p>

      <Link to="/navigate" className="btn">
        Navigation Page
      </Link>
    </main>
  );
};

export default HomePage;
