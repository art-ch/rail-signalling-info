import React from 'react';

const Description = ({ aspect, description }) => {
  // TODO: functionality for filtering description itself
  let newDescription;

  if (typeof description === 'string') {
    newDescription = (
      <div className="description-container">
        <p>{description}</p>
      </div>
    );
  } else {
    newDescription = Object.entries(description).map(
      ([signalType, signalTypeDescription], index) => {
        return (
          <div className="description-container" key={index}>
            <h3>{signalType}</h3>
            <p>{signalTypeDescription}</p>
          </div>
        );
      }
    );
  }

  return (
    <div className="information-container">
      <h3>{aspect}</h3>
      {newDescription}
    </div>
  );
};

export default Description;
