import React from 'react';

const Description = ({ aspect, description }) => {
  return (
    <div className="information-container">
      <h3>{aspect}</h3>
      {description.map(({ type, description }, index) => {
        return (
          <div className="description-container" key={index}>
            <h3>{type}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Description;
