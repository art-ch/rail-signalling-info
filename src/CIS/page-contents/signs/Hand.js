import React from 'react';
import hand from './img/hand.png';
import { SignWrapper } from './StyledComponentsForSigns';

const Hand = ({ color, path }) => {
  return (
    <SignWrapper width="200px" color={color} path={path}>
      <img src={hand} alt="" />
    </SignWrapper>
  );
};

export default Hand;
