import React from 'react';
import styled from 'styled-components';

const DangerousPlaceBoundaries = ({ special }) => {
  return (
    <Wrapper special={special}>
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
  );
};

export default DangerousPlaceBoundaries;

const Wrapper = styled.div`
  .pole {
    border: 1px solid black;
  }
  .disk,
  .outer-polka-dot,
  .inner-polka-dot-container,
  .dot {
    border-radius: 50%;
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
        transform: ${({ special }) =>
          (special && 'translateY(110%) rotate(90deg)') || 'translateY(110%)'};
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
