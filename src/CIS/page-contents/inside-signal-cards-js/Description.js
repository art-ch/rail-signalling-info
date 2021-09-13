import React from 'react';

const Description = ({ aspect, description }) => {
  // TODO: functionality for filtering description itself
  let newDescription;

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

  return (
    <div className="information-container">
      <h3>{aspect}</h3>
      {newDescription}
    </div>
  );
};

export default Description;
