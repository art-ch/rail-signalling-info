import React from 'react';
import styled from 'styled-components';

const Horn = () => {
  return (
    <Wrapper>
      <div className="pole">
        <div className="frame">
          <div className="upperPart">
            <p>C</p>
          </div>
          <div className="lowerPart"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Horn;

const Wrapper = styled.div`
  .pole,
  .frame {
    border: 1px solid black;
  }
  .pole {
    height: 170px;
    width: 5px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 10%,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 1) 36%,
      rgba(0, 0, 0, 1) 36%,
      rgba(0, 0, 0, 1) 42%,
      rgba(255, 255, 255, 1) 36%,
      rgba(255, 255, 255, 1) 76%,
      rgba(0, 0, 0, 1) 76%
    );
  }
  .frame {
    position: relative;
    width: 40px;
    height: 50px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    transform: translate(-45%, 5%);
    background: white;
    display: flex;
    flex-direction: column;
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
