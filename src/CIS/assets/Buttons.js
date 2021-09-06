import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { filterButtons } from '../data';

const Buttons = () => {
  const { setZone, setSignalType } = useContext(CISSignalContext);

  const clickHandler = (e) => {
    const id = parseInt(e.target.id);
    if (id === 1) {
      setZone('all');
    }
    if (id === 2) {
      setZone('main');
    }
    if (id === 3) {
      setZone('atp');
    }
    if (id === 4) {
      setZone('atp4');
    }
    if (id === 5) {
      setZone('semi-atp');
    }
    if (id === 6) {
      setSignalType('all');
    }
    if (id === 7) {
      setSignalType('entry');
    }
    if (id === 8) {
      setSignalType('exit');
    }
  };

  return (
    <div>
      {filterButtons.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button) => {
              const { id, name } = button;
              return (
                <button className="btn" id={id} onClick={clickHandler} key={id}>
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
