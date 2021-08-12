import React from 'react';
import styled from 'styled-components';

const SmallSignal = ({ aspect }) => {
  return (
    <Wrapper>
      <div className="signal-plate">
        <div
          className={`light ${aspect === 'moonWhite' && 'moon-white'}`}
        ></div>
        <div className={`light ${aspect === 'blue' && 'blue'}`}></div>
      </div>
      <div className="horizontal-support"></div>
      <div className="vertical-support"></div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  .signal-plate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: black;
    height: 60px;
  }
  .horizontal-support {
    height: 7px;
    width: 40px;
    background: #8b939a;
  }
  .vertical-support {
    height: 35px;
    width: 10px;
    background: #8b939a;
  }
  .light {
    background: #565656;
    margin: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .moon-white {
    background: #c2c5cc;
  }
  .blue {
    background: #0060fb;
  }
`;

export default SmallSignal;
