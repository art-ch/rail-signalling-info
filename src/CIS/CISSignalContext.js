import React, { useState } from 'react';
import { aspects } from './data';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('all');
  const [signalType, setSignalType] = useState('all');

  const filterButtons = (e) => {
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
    if (id === 12) {
      setSignalType('route');
    }
    if (id === 13) {
      setSignalType('block');
    }
    if (id === 14) {
      setSignalType('cover');
    }
    if (id === 15) {
      setSignalType('obstruction');
    }
    if (id === 16) {
      setSignalType('warning');
    }
    if (id === 17) {
      setSignalType('repeating');
    }
    if (id === 18) {
      setSignalType('maneuvering');
    }
    if (id === 19) {
      setSignalType('humping');
    }
  };

  const filterAspectsByZone = () => {
    let newAspects = [];
    if (zone === 'all') {
      newAspects = aspects;
    }
    if (zone === 'main') {
      newAspects = [...aspects.slice(0, 8)];
    }
    if (zone === 'fast') {
      newAspects = [...aspects.slice(8, 14)];
    }
    if (zone === 'atp') {
      newAspects = [aspects[0], aspects[14], ...aspects.slice(1, 14)];
    }
    if (zone === 'atp-4') {
      newAspects = [
        aspects[0],
        aspects[14],
        aspects[28],
        ...aspects.slice(1, 8),
      ];
    }
    if (zone === 'altp') {
      newAspects = [...aspects.slice(18, 26), aspects[5]];
    }
    if (zone === 'semi-atp') {
      newAspects = [aspects[0], ...aspects.slice(3, 8)];
    }
    return newAspects;
  };

  const filterAspectsBySignalType = (aspect, description) => {
    let newDescription = {};
    if (zone === 'main') {
      newDescription.main = description.main || description.maneuvering;
    } else if (zone === 'atp' || zone === 'atp-4') {
      if (aspect === 'green-flickering' || aspect === 'yellow-flickering') {
        newDescription.block = description.block;
      } else {
        newDescription = description;
      }
    } else {
      newDescription = description;
    }
    return newDescription;
  };

  return (
    <CISSignalContext.Provider
      value={{
        zone,
        setZone,
        filterButtons,
        filterAspectsByZone,
        filterAspectsBySignalType,
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
