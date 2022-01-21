import React from 'react';
import rightHand from './img/right-hand.png';
import leftHand from './img/left-hand.png';
import { SignWrapper } from './StyledComponentsForSigns';

const Hand = ({ color, path, left }) => {
  return (
    <SignWrapper width="200px" color={color} path={path}>
      <img src={(left && leftHand) || rightHand} alt="" />
    </SignWrapper>
  );
};

export default Hand;
