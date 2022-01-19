import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const DangerousPlaceBoundaries = ({ tempPole, ending }) => {
  return (
    <SignWrapper tempPole={tempPole}>
      <Wrapper ending={ending}>
        <div className="pole">
          <div className="outer-polka-dot">
            <div className="inner-polka-dot-container">
              <div className="inner-polka-dot">
                {Array.from({ length: 3 }).map((_, id) => {
                  return <div key={id} className="dot"></div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default DangerousPlaceBoundaries;

const Wrapper = styled.div`
  .outer-polka-dot,
  .inner-polka-dot-container,
  .dot {
    border-radius: 50%;
  }
  .outer-polka-dot {
    width: 35px;
    height: 35px;
    transform: translate(-45%, 5%);
    border: 8px dotted white;
    background: black;
    display: grid;
    place-items: center;
    .inner-polka-dot-container {
      background: white;
      width: 33px;
      height: 33px;
      .inner-polka-dot {
        background: black;
        width: 33px;
        height: 10px;
        transform: ${({ ending }) =>
          (ending && 'translateY(110%) rotate(90deg)') || 'translateY(110%)'};
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .dot {
          width: 8px;
          height: 8px;
          background: white;
        }
      }
    }
  }
`;
