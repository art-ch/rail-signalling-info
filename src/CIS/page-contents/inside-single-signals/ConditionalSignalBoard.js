import React from 'react';
import styled from 'styled-components';

const ConditionalSignalBoard = ({ aspect }) => {
  if (aspect === 'conditional') {
    return (
      <Wrapper>
        <div className="vertical-support">
          <div className="t-plate">
            <div className="t-container">
              <div className="horizontal-stroke">
                <div className="reflective-element"></div>
                <div className="reflective-element"></div>
                <div className="reflective-element"></div>
              </div>
              <div className="vertical-stroke">
                <div className="reflective-element"></div>
                <div className="reflective-element"></div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default ConditionalSignalBoard;

const Wrapper = styled.div`
  .vertical-support {
    width: 40px;
    height: 5px;
    background: #6c757d;
  }
  .t-plate {
    width: 30px;
    height: 30px;
    transform: translateX(100%) translateY(-80%) rotate(45deg);
    background: black;
    position: relative;
  }
  .t-container {
    width: 15px;
    height: 15px;
    transform: rotate(-45deg);
    position: absolute;
    top: 25%;
    left: 20%;
  }
  .horizontal-stroke,
  .vertical-stroke {
    display: flex;
    align-items: center;
    width: 15px;
    height: 5px;
    padding: 1px 2px;
    border-radius: 5px;
    background: white;
  }
  .horizontal-stroke {
    .reflective-element {
      z-index: 1;
    }
    justify-content: space-between;
  }
  .vertical-stroke {
    .reflective-element {
      margin-right: 1px;
    }
    justify-content: flex-end;
    margin-top: 2px;
    transform: rotate(90deg);
  }
  .reflective-element {
    border-radius: 50%;
    height: 3px;
    width: 3px;
    border: 0.5px solid black;
  }
`;
