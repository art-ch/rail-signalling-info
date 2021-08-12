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
  .plate,
  .smaller-plate,
  .green-line-container,
  .small-signal-plate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .plate,
  .smaller-plate,
  .green-line-container {
    transform: translate(-32%);
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

  .green-flickering {
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

const SmallSignalWrapper = styled.article`
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

export { SignalWrapper, SmallSignalWrapper };
