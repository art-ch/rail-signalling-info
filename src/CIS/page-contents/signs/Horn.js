import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const Horn = ({ tempSignPole, catenaryPole }) => {
  return (
    <SignWrapper tempSignPoleSpecial catenaryPoleSign={catenaryPole}>
      <Wrapper catenaryPole>
        <div
          className={
            (tempSignPole && 'temp-sign-pole') ||
            (catenaryPole && 'catenary-pole') ||
            'pole'
          }
        >
          <div className="frame">
            <div className="upperPart">
              <p>C</p>
            </div>
            <div className="lowerPart"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default Horn;

const Wrapper = styled.div`
  .frame {
    display: block;
    width: 40px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    .upperPart {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70%;
      font-weight: bold;
      font-size: 26px;
    }
    .lowerPart {
      height: 30%;
      background: green;
    }
  }
`;
