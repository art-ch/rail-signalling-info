import React from 'react';
import styled from 'styled-components';

const HandheldFlag = ({ color, folded }) => {
  return (
    <Wrapper color={color} folded={folded}>
      <div className="grip">
        <div className="fabric">
          <div className="light"></div>
        </div>
      </div>
    </Wrapper>
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
  .fabric,
  .grip {
    border: 1px solid black;
  }
  .grip {
    height: 65px;
    width: 5px;
    background: #8b939a;
  }
  .fabric {
    height: 32px;
    ${({ folded }) => (folded ? foldedFlagStyles : openedFlagStyles)}
    background: ${({ color }) => color};
    display: grid;
    place-items: center;
  }
`;
