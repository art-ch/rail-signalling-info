import styled from 'styled-components';

const SignalWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .post {
    background: #6c757d;
    width: 18px;
    height: 400px;
  }

  /* plates */
  .plates {
    margin-top: 0.5rem;
  }
  .plate,
  .smallerPlate,
  .green-line-container,
  .small-signal-plate {
    display: flex;
    flex-direction: column;
    background: black;
    align-items: center;
    justify-content: center;
  }
  .plate,
  .smallerPlate,
  .green-line-container {
    transform: translate(-32%);
  }
  .plate,
  .smallerPlate {
    width: 50px;
    border-radius: 50px;
    margin-bottom: 15px;
  }
  .plate {
    height: 100px;
  }
  .smallerPlate {
    height: 70px;
  }

  /* green line container */
  .green-line-container {
    display: flex;
    flex-direction: row;
    height: 21px;
    width: 53px;
    margin-bottom: 7px;
    .green-line-light {
      height: 13px;
      width: 13px;
      margin: 1.5px;
      border-radius: 50%;
      background: #00b600;
    }
  }

  /* lights */
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
  .moonWhite {
    background: #c2c5cc;
  }

  /* animations */
  .yellow-flickering {
    animation: flickering 2s infinite;
  }
  @keyframes flickering {
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
  .green-flickering {
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

const DwarfManeuveringSignalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  .small-signal-plate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
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

const CombinedSignalWrapper = styled.article`
  display: flex;
  align-items: flex-end;
`;

export { SignalWrapper, DwarfManeuveringSignalWrapper, CombinedSignalWrapper };
