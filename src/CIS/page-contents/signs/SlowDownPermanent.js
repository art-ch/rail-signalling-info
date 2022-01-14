import React from 'react';
import styled from 'styled-components';

const SlowDownPermanent = ({ color }) => {
  return (
    <Wrapper color={color}>
      <div className="pole">
        <div className="disk">
          <div className="colored-disk"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SlowDownPermanent;

const Wrapper = styled.div`
  .pole,
  .disk {
    border: 1px solid black;
  }
  .disk,
  .colored-disk {
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
  .disk {
    width: 50px;
    height: 50px;
    transform: translate(-45%, 5%);
    background: white;
    display: grid;
    place-items: center;
  }
  .colored-disk {
    height: 38px;
    width: 38px;
    border: 5px solid black;
    background: ${({ color }) => color};
  }
`;
