import React from 'react';

const Description = ({ name, description }) => {
  let newDescription;
  if (typeof description === 'string') {
    newDescription = (
      <div className="description-container" key={Math.random()}>
        <p>{description}</p>
      </div>
    );
  } else {
    newDescription = Object.entries(description).map(
      ([signalType, signalTypeDescription]) => {
        return (
          <div className="description-container" key={Math.random()}>
            <h3>{signalType}</h3>
            <p>{signalTypeDescription}</p>
          </div>
        );
      }
    );
  }
  return (
    <div className="information-container">
      <h3>{name}</h3>
      {newDescription}
    </div>
  );
};

export default Description;
