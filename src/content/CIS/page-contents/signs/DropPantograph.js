import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const DropPantograph = ({
  turnedOn,
  innerFrameColor,
  tempSignPoleSpecial,
  raise,
  doubled,
}) => {
  const length = doubled ? 2 : 1;
  const divs = Array.from({ length });

  return (
    <SignWrapper
      catenaryPoleSign
      diamondFrame
      innerFrameColor={innerFrameColor}
      width="100px"
      tempSignPoleSpecial={tempSignPoleSpecial}
    >
      <Wrapper
        turnedOn={turnedOn}
        tempSignPoleSpecial={tempSignPoleSpecial}
        innerFrameColor={innerFrameColor}
        raise={raise}
      >
        <div
          className={
            (tempSignPoleSpecial && 'temp-sign-pole') || 'catenary-pole'
          }
        >
          {divs.map((_, id) => {
            return (
              <div className="frame" key={id}>
                <div className="colored-frame">
                  <div className="sign-content"></div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default DropPantograph;

const Wrapper = styled.div`
  .frame {
    ${({ tempSignPoleSpecial }) =>
      tempSignPoleSpecial && 'transform: rotate(45deg) translate(-50%, 10%)'};
    margin-bottom: 20px;
  }
  .colored-frame {
    color: ${({ innerFrameColor }) => innerFrameColor};
    .sign-content {
      height: 8px;
      width: 37px;
      transform: ${({ raise }) =>
        (raise && 'rotate(-135deg) translate(-30%, -125%)') ||
        'rotate(-45deg) translate(-30%, 135%)'};
      background: ${({ raise }) => (raise && 'white') || 'grey'};
      border-radius: 50px;
      ${({ turnedOn }) =>
        turnedOn && 'animation: drop-pantograph-active 2s infinite'};

      @keyframes drop-pantograph-active {
        0% {
          background: grey;
        }
        50% {
          background: white;
        }
        100% {
          background: grey;
        }
      }
    }
  }
`;
