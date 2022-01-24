import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const Stop = () => {
  return (
    <SignWrapper width="100px" tempSignPoleGradientColor="red">
      <Wrapper>
        <div className="temp-sign-pole">
          <div className="frame">
            <div className="colored-frame"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default Stop;

const Wrapper = styled.div`
  .frame {
    border: 1px solid black;
    height: 32px;
    width: 66px;
    transform: translate(-45%, 5%);
    background: white;
    display: grid;
    place-items: center;
  }
  .colored-frame {
    height: 20px;
    width: 54px;
    border: 5px solid black;
    background: red;
  }
`;
