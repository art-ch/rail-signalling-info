import React from 'react';
import styled from 'styled-components';

const Stop = ({ color }) => {
  return (
    <Wrapper color={color}>
      <div className="pole">
        <div className="frame">
          <div className="colored-frame"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Stop;

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
    width: 66px;
    transform: translate(-45%, 5%);
    background: white;
    display: grid;
    place-items: center;
  }
  .colored-frame {
    height: 20px;
    width: 54px;
    border: 5px solid black;
    background: red;
  }
`;
