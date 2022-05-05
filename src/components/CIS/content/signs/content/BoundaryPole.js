import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const BoundaryPole = ({ branch }) => {
  return (
    <SignWrapper>
      <Wrapper branch={branch}>
        <div className="short-pole">
          <div className={branch ? 'white-line' : 'black-line'}></div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default BoundaryPole;

const Wrapper = styled.div`
  .short-pole,
  .white-line,
  .black-line {
    width: 20px;
  }
  .short-pole,
  .black-line {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  .short-pole {
    height: 60px;
    background: ${({ branch }) =>
      branch
        ? 'black'
        : `repeating-linear-gradient(
      25deg,
      black,
      black 8px,
      white 8px,
      white 15px
    )`};
  }
  .white-line {
    height: 15px;
    background: white;
    transform: translateY(100%);
  }
  .black-line {
    height: 10px;
    background: black;
  }
`;
