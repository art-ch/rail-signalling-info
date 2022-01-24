import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const HandheldFlag = ({ lightColor, folded, path }) => {
  return (
    <SignWrapper width="150px" gripColor="#8b939a" path={path}>
      <Wrapper lightColor={lightColor} folded={folded}>
        <div className="grip">
          <div className="fabric">
            <div className="light"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default HandheldFlag;

const openedFlagStyles = `
    width: 50px;
    transform: translateX(-83%);
`;
const foldedFlagStyles = `
    width: 10px;
    transform: translateX(-33%);
`;

const Wrapper = styled.div`
  transform: rotate(-45deg);
  .fabric {
    border: 1px solid black;
    height: 32px;
    ${({ folded }) => (folded ? foldedFlagStyles : openedFlagStyles)}
    background: ${({ lightColor }) => lightColor};
    display: grid;
    place-items: center;
  }
`;
