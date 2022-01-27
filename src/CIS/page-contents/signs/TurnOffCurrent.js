import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const TurnOffCurrent = ({ innerFrameColor }) => {
  return (
    <SignWrapper
      catenaryPoleSign
      diamondFrame
      innerFrameColor={innerFrameColor}
      width="100px"
    >
      <Wrapper innerFrameColor={innerFrameColor}>
        <div className="catenary-pole">
          <div className="frame">
            <div className="colored-frame">
              <div className="sign-content">
                <div className="upper-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="lower-line"></div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default TurnOffCurrent;

const Wrapper = styled.div`
  .frame {
    ${({ tempSignPoleSpecial }) =>
      tempSignPoleSpecial && 'transform: rotate(45deg) translate(-50%, 10%)'};
  }
  .colored-frame {
    color: ${({ innerFrameColor }) => innerFrameColor};
    .sign-content {
      width: 25px;
      transform: rotate(-45deg) translate(-5%, 45%);
      display: flex;
      flex-direction: column;
      .dot,
      .lower-line {
        border-radius: 50px;
        height: 8px;
        background: white;
      }
      .upper-dots {
        display: flex;
        justify-content: space-between;
      }
      .dot {
        width: 8px;
      }
      .lower-line {
        margin-top: 7px;
      }
    }
  }
`;
