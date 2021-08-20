import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { filterButtons } from '../data';

const Buttons = () => {
  const { setZone } = useContext(CISSignalContext);
  const clickHandler = (e) => {
    if (e.target.innerText === 'all' || e.target.innerText === 'main') {
      setZone(e.target.innerText);
    }
    if (e.target.innerText === 'fast switches zone') {
      setZone('fast');
    }
  };

  return (
    <div>
      {filterButtons.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button, index) => {
              const { id, name } = button;
              return (
                <button className="btn" onClick={clickHandler} key={id}>
                  {name}
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
