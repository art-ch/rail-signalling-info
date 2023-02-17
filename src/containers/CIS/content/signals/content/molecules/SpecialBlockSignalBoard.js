import React from 'react';
import styled from 'styled-components';

const SpecialBlockSignalBoard = ({ zone, aspect, signalType, signCase }) => {
  const divs = Array.from(Array(3));

  const shouldRender = (signCase) => {
    const isZoneAndSignalTypeCorrect = () =>
      zone === 'atp' || zone === 'atp-4' || signalType === 'block';
    const isAspectCorrect = () =>
      aspect === 'green-flickering' || aspect === 'yellow-flickering';

    const signalCase = () => isZoneAndSignalTypeCorrect() && isAspectCorrect();

    return signalCase() || signCase;
  };

  if (shouldRender(signCase)) {
    return (
      <Wrapper
        style={{
          transform:
            (signCase && 'scale(1.5) translate(10%, 35%)') || 'translateX(-10%)'
        }}
      >
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
};

export default SpecialBlockSignalBoard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  height: 50px;
  background: white;
  border: 2px solid black;
  overflow: hidden;
  margin-bottom: 10px;
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
