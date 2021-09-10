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
      setZone('fast');
    }
    if (id === 4) {
      setZone('atp');
    }
    if (id === 5) {
      setZone('atp-4');
    }
    if (id === 6) {
      setZone('altp');
    }
    if (id === 7) {
      setZone('semi-atp');
    }
    if (id === 8) {
      setSignalType('all');
    }
    if (id === 9) {
      setSignalType('entry');
    }
    if (id === 10) {
      setSignalType('exit');
    }
    if (id === 11) {
      setSignalType('invitational');
    }
  };

  return (
    <section className="btn-wrapper">
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
    </section>
  );
};

export default Buttons;
