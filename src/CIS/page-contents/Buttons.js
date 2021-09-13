import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { buttons } from '../data';

const Buttons = () => {
  const { filterButtons } = useContext(CISSignalContext);

  return (
    <section className="btn-wrapper">
      {buttons.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button) => {
              const { id, name } = button;
              return (
                <button
                  className="btn"
                  id={id}
                  onClick={filterButtons}
                  key={id}
                >
                  {name}
                </button>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Buttons;
