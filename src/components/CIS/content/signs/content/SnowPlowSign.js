import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

export const SnowPlowSign = ({ getReady, doubled, cut }) => {
  return (
    <SignWrapper width="80px">
      <Wrapper cut={cut}>
        <div className="pole">
          {getReady ? <GetReadyFrame /> : <MainFrame doubled={doubled} />}
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

const MainFrame = ({ doubled }) => {
  return (
    <>
      <div className="frame">
        <div className="horizontal-line"></div>
      </div>
      {doubled && (
        <div className="frame">
          <div className="horizontal-line"></div>
        </div>
      )}
    </>
  );
};

const GetReadyFrame = () => {
  return (
    <div className="frame getReady-frame">
      <div className="inner-frame">
        <div className="innermost-frame">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  .pole {
    background: repeating-linear-gradient(
      white,
      white 15px,
      black 15px,
      black 35px
    );
  }
  .frame {
    transform: rotate(45deg) translate(-28%, 35%);
    margin-bottom: 30px;
    border: 5px dashed black;
    width: 30px;
    height: 30px;
    background: transparent;
    ${({ cut }) => cut && 'clip-path: polygon(100% 0, 100% 100%, 0 100%)'};
    .horizontal-line {
      width: 8px;
      height: 55px;
      transform: rotate(45deg);
      background: repeating-linear-gradient(
        white,
        white 5px,
        black 5px,
        black 25px
      );
    }
  }
  .getReady-frame,
  .inner-frame,
  .innermost-frame {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  .getReady-frame,
  .innermost-frame {
    background: black;
  }
  .inner-frame,
  .innermost-frame {
    display: grid;
    place-items: center;
  }
  .getReady-frame {
    transform: rotate(0) translateX(-45%);
    outline: 2px solid black;
    outline-offset: 2px;
    border: 7px dotted white;
    .inner-frame {
      background: white;
      height: 30px;
      width: 30px;
      .innermost-frame {
        height: 26px;
        width: 26px;
        .dot {
          background: white;
          height: 8px;
          width: 8px;
          border-radius: 50%;
        }
      }
    }
  }
`;
