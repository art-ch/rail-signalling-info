import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const NeutralZoneAttention = ({ innerFrameColor, tempSignPoleSpecial }) => {
  return (
    <SignWrapper
      catenaryPoleSign
      diamondFrame
      innerFrameColor={innerFrameColor}
      width="100px"
      tempSignPoleSpecial={tempSignPoleSpecial}
    >
      <Wrapper
        tempSignPoleSpecial={tempSignPoleSpecial}
        innerFrameColor={innerFrameColor}
      >
        <div
          className={
            (tempSignPoleSpecial && 'temp-sign-pole') || 'catenary-pole'
          }
        >
          <div className="frame">
            <div className="colored-frame">
              <div className="sign-content">
                <div className="short-line short-line-upper"></div>
                <div className="short-line"></div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default NeutralZoneAttention;

const Wrapper = styled.div`
  .frame {
    ${({ tempSignPoleSpecial }) =>
      tempSignPoleSpecial && 'transform: rotate(45deg) translate(-50%, 10%)'};
  }
  .colored-frame {
    color: ${({ innerFrameColor }) => innerFrameColor};
    .sign-content {
      width: 25px;
      transform: rotate(-45deg) translate(-15%, 80%);
      display: flex;
      flex-direction: column;
      .short-line {
        border-radius: 50px;
        height: 8px;
        width: 12px;
        background: white;
      }
      .short-line-upper {
        align-self: flex-end;
      }
    }
  }
`;
