import React from 'react';
import { SpecialBlockSignalBoard } from '../inside-single-signals/';
import { SignWrapper } from './StyledComponentsForSigns';

const BlockBorderWWLTP = () => {
  return (
    <SignWrapper catenaryPoleSign>
      <div className="catenary-pole">
        <SpecialBlockSignalBoard signCase />
      </div>
    </SignWrapper>
  );
};

export default BlockBorderWWLTP;
