import React from 'react';
import styled from 'styled-components';

const StopNightTime = () => {
  return (
    <Wrapper>
      <div className="pole">
        <div className="frame">
          <div className="light"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StopNightTime;

const Wrapper = styled.div`
  .pole,
  .frame {
    border: 1px solid black;
  }
  .pole {
    height: 170px;
    width: 5px;
    background: #6c757d;
  }
  .frame {
    height: 32px;
    width: 25px;
    transform: translate(-45%, 5%);
    background: black;
    display: grid;
    place-items: center;
  }
  .light {
    background: red;
    margin: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
