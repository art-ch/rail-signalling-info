import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = () => {
  return (
    <main>
      <h1>Navigation</h1>
      <p>
        All signalling systems are divided by their respected country or area of
        application. Please click any link to access signals of specific
        country/area.
      </p>
      <Link to="/CIS">CIS Zone</Link>
    </main>
  );
};

export default NavigationPage;
