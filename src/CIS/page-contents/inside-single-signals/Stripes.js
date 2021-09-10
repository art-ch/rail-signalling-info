import React from 'react';

const Stripes = ({ aspect }) => {
  if (aspect.includes('two-stripes')) {
    return Array.from(Array(2)).map((_, index) => {
      return (
        <div className="green-line-container" key={index}>
          {Array.from(Array(3)).map((_, index) => {
            return <div className="green-line-light" key={index}></div>;
          })}
        </div>
      );
    });
  } else if (aspect.includes('stripe')) {
    return (
      <div className="green-line-container">
        {Array.from(Array(3)).map((_, index) => {
          return <div className="green-line-light" key={index}></div>;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Stripes;
