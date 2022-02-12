import React from 'react';
import styled from 'styled-components';
import rightHand from './img/right-hand.png';
import leftHand from './img/left-hand.png';
import { SignWrapper } from './StyledComponentsForSigns';

const Hand = ({ color, path, left }) => {
  return (
    <SignWrapper width="200px" color={color} path={path}>
      <Wrapper>
        <img src={(left && leftHand) || rightHand} alt="" />
      </Wrapper>
    </SignWrapper>
  );
};

export default Hand;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    margin: 5rem 0;
  }
  @media (max-width: 375px) {
    margin: 0;
  }
`;
