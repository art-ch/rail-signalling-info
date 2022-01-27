import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const NeutralZone = ({ ending }) => {
  return (
    <SignWrapper catenaryPoleSign>
      <Wrapper ending={ending}>
        <div className="catenary-pole">
          <div className="frame">
            <div className="vertical-line"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default NeutralZone;

const Wrapper = styled.div`
  ${({ ending }) =>
    ending &&
    `transform: scale(0.7);
  margin-left: 20px;
  `};
  .frame,
  .vertical-line {
    height: 90px;
  }
  .frame {
    width: 28px;
    transform: translateY(50%);
    background: repeating-linear-gradient(
      black,
      black 15px,
      white 15px,
      white 25px
    );
  }
  .vertical-line {
    width: 12px;
    background: black;
    ${({ ending }) => ending && 'display: none'};
  }
`;
