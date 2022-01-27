import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const BlockBorderALTP = () => {
  return (
    <SignWrapper>
      <Wrapper>
        <div className="pole">
          <div className="frame sign-frame">
            <div className="sign-content">
              <div className="line straight-line"></div>
              <div className="line left-line"></div>
              <div className="line right-line"></div>
            </div>
          </div>
          <div className="frame number-frame">
            <p>7</p>
          </div>
          <div className="frame box-frame">
            <div className="handle"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default BlockBorderALTP;

const Wrapper = styled.div`
  .frame {
    width: 17px;
    margin-top: 5px;
  }
  .sign-frame {
    height: 27px;
    .sign-content {
      width: 17px;
      height: 17px;
      background: orange;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      .line {
        height: 1px;
        width: 17px;
        background: black;
      }
      .straight-line {
        transform: translateY(850%);
      }
      .left-line {
        transform: translateY(700%) rotate(60deg);
      }
      .right-line {
        transform: translateY(650%) rotate(-60deg);
      }
    }
  }
  .number-frame {
    height: 20px;
  }
  .box-frame {
    height: 25px;
    background: grey;
    .handle {
      width: 2px;
      height: 2px;
      background: black;
      transform: translateX(-200%);
    }
  }
`;
