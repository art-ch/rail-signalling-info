import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const HandheldLight = ({ lightColor, path }) => {
  return (
    <SignWrapper lightColor={lightColor} gripColor="black" path={path}>
      <Wrapper>
        <div className="grip">
          <div className="frame">
            <div className="light"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default HandheldLight;

const Wrapper = styled.div`
  .frame {
    height: 32px;
    width: 26px;
    transform: translate(-42%, 95%);
    background: black;
  }
`;
