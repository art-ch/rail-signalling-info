import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const RailSwitchSign = ({
  divertAnalog,
  waterTowerDay,
  lightColor,
  mode,
  shrink,
}) => {
  return (
    <SignWrapper
      lightColor={lightColor}
      switchPole
      style={(divertAnalog || waterTowerDay) && { width: '150px' }}
    >
      <Wrapper mode={mode} shrink={shrink}>
        <div className="pole">
          <div className="cap"></div>
          <div className="frame">
            {mode === 'divert' && <div className="light"></div>}
            {divertAnalog && <div className="dark-part"></div>}
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default RailSwitchSign;

const frameStyles = {
  straightDay: `
    width: 20px;
    border: 5px solid black;
    background: grey;
  `,
  straightNight: `
    width: 20px;
    border: 5px solid black;
  `,
  straightAnalog: `
  display: none;
  `,
  divert: `
    width: 30px;
    height: 30px;
    border: 5px solid black;
  `,
  divertAnalog: `
    clip-path: polygon(25% 0%, 100% 0, 75% 50%, 100% 100%, 25% 100%, 0% 50%);
    width: 100px;
    height: 50px;
  `,
};

const Wrapper = styled.div`
  .frame {
    ${({ mode }) => frameStyles[mode]}
    .light {
      border: 1px solid black;
    }
  }
  .dark-part {
    clip-path: polygon(50% 0%, 100% 0, 50% 50%, 100% 100%, 50% 100%, 0% 50%);
    width: 60px;
    height: 50px;
    background: black;
  }
  ${({ shrink }) =>
    shrink &&
    `transform: scale(0.7);
    margin-right: 3rem;
  `}
`;
