import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { signalFilterButtons } from '../data';

const Buttons = () => {
  const { filterButtons } = useContext(CISSignalContext);
  const { zone } = useContext(CISSignalContext);

  return (
    <section className="btn-wrapper">
      {signalFilterButtons.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button) => {
              const { id, name, displayName } = button;
              return (
                <button
                  className="btn"
                  id={id}
                  onClick={() => filterButtons(id, name)}
                  key={id}
                >
                  {id < 9 ? displayName : name}
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
