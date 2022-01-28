import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';
import { FaSkullCrossbones } from 'react-icons/fa';

const BioHazardSign = ({ sideWays, fromBehind, front }) => {
  return (
    <SignWrapper>
      <Wrapper sideWays={sideWays} fromBehind={fromBehind}>
        <div className="temp-sign-pole">
          <div className="cap-container">
            <div className="cap"></div>
            <div className="cap smaller-cap"></div>
          </div>
          <div className="frame">
            <div className="frame inner-frame">
              <div className="frame innermost-frame">
                {!sideWays && (
                  <>
                    <p className="text">
                      {fromBehind && <span>Здесь</span>} Заражено
                    </p>
                    {front && <FaSkullCrossbones />}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default BioHazardSign;

const Wrapper = styled.div`
  .cap-container {
    margin-bottom: 2px;
  }
  .cap {
    border: 1px solid black;
    background: white;
    height: 3px;
  }
  .smaller-cap {
    width: 8px;
  }
  .inner-frame,
  .innermost-frame {
    transform: translate(0);
  }
  .frame {
    ${({ sideWays }) => sideWays && 'width: 26px'};
  }
  .inner-frame {
    width: ${({ sideWays }) => (sideWays ? '20px' : '44px')};
    height: 44px;
  }
  .innermost-frame {
    width: ${({ sideWays }) => (sideWays ? '14px' : '38px')};
    height: 38px;
  }
  .text {
    text-align: center;
    font-size: 8px;
    font-weight: bold;
    ${({ fromBehind }) => fromBehind && 'transform: rotate(-45deg)'}
  }
`;
