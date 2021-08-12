import React from 'react';
import styled from 'styled-components';

const Signal = ({ aspect }) => {
  return (
    <Wrapper aspect={aspect}>
      <div className="post">
        <div className="plate">
          <div
            className={`light ${
              aspect === 'yellow' ||
              aspect === 'two-yellows' ||
              aspect === 'three-yellows' ||
              aspect === 'yellow-green' ||
              aspect === 'yellow-moonWhite'
                ? 'yellow'
                : aspect === 'yellow-flickering' ||
                  aspect === 'two-yellows-flickering' ||
                  aspect === 'yellow-moonWhite-flickering'
                ? 'yellow-flickering'
                : null
            }`}
          ></div>
          <div
            className={`light ${
              aspect === 'green'
                ? 'green'
                : aspect === 'green-flickering' ||
                  aspect === 'yellow-green-flickering'
                ? 'green-flickering'
                : null
            }`}
          ></div>
          <div
            className={`light ${
              aspect === 'red'
                ? 'red'
                : aspect === 'yellow-green'
                ? 'green'
                : aspect === 'three-yellows'
                ? 'yellow'
                : null
            }`}
          ></div>
        </div>
        <div className="smaller-plate">
          <div
            className={`light ${
              aspect === 'two-yellows' ||
              aspect === 'two-yellows-flickering' ||
              aspect === 'yellow-green-flickering'
                ? 'yellow'
                : null
            }`}
          ></div>
          <div
            className={`light ${
              aspect === 'moonWhite' ||
              aspect === 'yellow-moonWhite' ||
              aspect === 'yellow-moonWhite-flickering'
                ? 'moon-white'
                : aspect === 'three-yellows'
                ? 'yellow'
                : null
            }`}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  .post {
    background: black;
    width: 10px;
    height: 400px;
  }
  .plate,
  .smaller-plate {
    transform: translate(-40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45px;
    border-radius: 14px;
  }
  .plate {
    background: black;
    height: 100px;
    margin-bottom: 20px;
  }
  .smaller-plate {
    background: black;
    height: 70px;
  }

  .light {
    background: #565656;
    margin: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .yellow {
    background: #ffae42;
  }
  .red {
    background: #fa0000;
  }
  .green {
    background: #00b600;
  }
  .moon-white {
    background: #c2c5cc;
  }

  .yellow-flickering {
    background: #ffae42;
    animation: yellow-flickering 2s infinite;
  }
  @keyframes yellow-flickering {
    0% {
      background: #565656;
    }
    50% {
      background: #ffae42;
    }
    100% {
      background: #565656;
    }
  }

  .light.green-flickering {
    background: green;
    animation: green-flickering 2s infinite;
  }
  @keyframes green-flickering {
    0% {
      background: #565656;
    }
    50% {
      background: #00b600;
    }
    100% {
      background: #565656;
    }
  }
`;

export default Signal;
