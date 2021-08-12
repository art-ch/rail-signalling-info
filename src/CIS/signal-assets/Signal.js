import React from 'react';
import styled from 'styled-components';

const Signal = ({ aspect, flag }) => {
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
        {flag === 'fast' && (
          <div className="green-line-container">
            <div className="green-line"></div>
          </div>
        )}
        {flag === 'faster' && (
          <div>
            <div className="green-line-container">
              <div className="green-line"></div>
            </div>
            <div className="green-line-container">
              <div className="green-line"></div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  .post {
    background: #6c757d;
    width: 18px;
    height: 400px;
  }
  .plate,
  .smaller-plate,
  .green-line-container {
    transform: translate(-32%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .plate,
  .smaller-plate {
    width: 50px;
    border-radius: 50px;
  }
  .plate {
    background: black;
    height: 100px;
    margin-bottom: 20px;
  }
  .smaller-plate {
    background: black;
    height: 70px;
    margin-bottom: 10px;
  }

  .green-line-container {
    display: flex;
    height: 20px;
    width: 50px;
    background: black;
    margin-bottom: 3px;
    .green-line {
      align-self: center;
      height: 15px;
      width: 45px;
      background: green;
    }
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
