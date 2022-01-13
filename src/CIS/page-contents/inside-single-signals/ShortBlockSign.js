import React from 'react';
import styled from 'styled-components';

import { ImArrowDown } from 'react-icons/im';

const ShortBlockSign = ({ aspect, signalType }) => {
  if (
    (aspect === 'yellow-green' &&
      (signalType === 'entry' || signalType === 'route')) ||
    (aspect === 'two-yellows-special' && signalType === 'special')
  ) {
    return (
      <Wrapper>
        {Array.from({ length: 2 }).map((_, id) => {
          return (
            <div key={id} className="board">
              <ImArrowDown />
            </div>
          );
        })}
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default ShortBlockSign;

const Wrapper = styled.article`
  margin-bottom: 1rem;
  .board {
    margin-bottom: 2px;
    background: white;
    border: 1px solid black;
    height: 18px;
    width: 16px;
  }
`;
