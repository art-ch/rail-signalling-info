import React, { useState } from 'react';
import { aspects, filterButtons } from '../data';

const Buttons = () => {
  const [signals, setSignals] = useState(aspects);

  const clickHandler = (e) => {
    if (e.target.innerText === 'all') {
      setSignals(aspects);
    }
    if (e.target.innerText === 'main') {
      setSignals(aspects.filter((aspect) => aspect.zone === 'main'));
    }
    if (e.target.innerText === 'fast switches area') {
      setSignals(
        aspects.filter(
          (aspect) => aspect.zone === 'main' || aspect.zone === 'fast'
        )
      );
    }
  };

  return (
    <div>
      {filterButtons.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button, index) => {
              return (
                <button className="btn" onClick={clickHandler} key={index}>
                  {button}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
