import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const TurnOnCurrent = ({ innerFrameColor, doubled }) => {
  const length = doubled ? 2 : 1;
  const divs = Array.from({ length });

  return (
    <SignWrapper
      catenaryPoleSign
      diamondFrame
      innerFrameColor={innerFrameColor}
      width="100px"
    >
      <Wrapper innerFrameColor={innerFrameColor}>
        <div className="catenary-pole">
          {divs.map((_, id) => {
            return (
              <div className="frame" key={id}>
                <div className="colored-frame">
                  <div className="sign-content">
                    <div className="upper-dots">
                      <div className="upper-line"></div>
                      <div className="upper-line"></div>
                    </div>
                    <div className="lower-line"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default TurnOnCurrent;

const Wrapper = styled.div`
  .frame {
    ${({ tempSignPoleSpecial }) =>
      tempSignPoleSpecial && 'transform: rotate(45deg) translate(-50%, 10%)'};
    margin-bottom: 20px;
  }
  .colored-frame {
    color: ${({ innerFrameColor }) => innerFrameColor};
    .sign-content {
      width: 25px;
      transform: rotate(-45deg) translate(-5%, 45%);
      display: flex;
      flex-direction: column;
      .upper-line,
      .lower-line {
        border-radius: 50px;
        height: 8px;
        background: white;
      }
      .upper-dots {
        display: flex;
        justify-content: space-between;
      }
      .upper-line {
        width: 8px;
        height: 20px;
      }
      .lower-line {
        margin-top: -7px;
      }
    }
  }
`;
