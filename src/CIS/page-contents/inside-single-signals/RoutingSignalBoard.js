import React from 'react';
import styled from 'styled-components';

const RoutingSignalBoard = ({ zone, aspect }) => {
  const divs = Array.from(Array(3));
  if (zone === 'atp' || zone === 'atp-4') {
    if (aspect === 'green-flickering' || aspect === 'yellow-flickering') {
      return (
        <Wrapper style={{ transform: 'translate(-10%)' }}>
          {divs.map((_, index) => {
            return (
              <div className="black-stripe" key={index}>
                {divs.map((_, index) => {
                  return <div className="white-dot" key={index}></div>;
                })}
              </div>
            );
          })}
        </Wrapper>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default RoutingSignalBoard;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  height: 50px;
  background: white;
  border: 2px solid black;
  translate: (-100%);
  overflow: hidden;
  .black-stripe {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 10px;
    background: black;
    transform: rotate(-30deg) translateX(-22%) translateY(-25%);
  }
  .white-dot {
    width: 3px;
    height: 3px;
    margin-left: 2px;
    border-radius: 50%;
    background: white;
  }
`;
