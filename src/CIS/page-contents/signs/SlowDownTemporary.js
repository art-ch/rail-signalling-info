import React from 'react';
import styled from 'styled-components';

const SlowDownTemporary = ({ color }) => {
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

export default SlowDownTemporary;

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
    width: 50px;
    height: 50px;
    transform: translate(-45%, 5%);
    background: white;
    display: grid;
    place-items: center;
  }
  .colored-frame {
    height: 38px;
    width: 38px;
    border: 5px solid black;
    background: ${({ color }) => color};
  }
`;
