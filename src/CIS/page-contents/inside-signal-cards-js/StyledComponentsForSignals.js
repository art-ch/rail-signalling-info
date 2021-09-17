import styled from 'styled-components';

const SignalWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* post */

  .big-signal-post,
  .post {
    background: #6c757d;
    width: 18px;
  }
  .big-signal-post {
    height: 450px;
  }
  .post {
    height: 400px;
  }

  /* plates */
  .plates {
    margin-top: 0.5rem;
  }
  .plate,
  .smaller-plate,
  .moonWhite-plate,
  .green-line-container,
  .dwarf-signal-plate,
  .dwarf-signal-smaller-plate,
  .dwarf-maneuvering-signal-plate {
    display: flex;
    flex-direction: column;
    background: black;
    align-items: center;
    justify-content: center;
  }
  .plate,
  .smaller-plate,
  .green-line-container {
    transform: translate(-32%);
  }
  .plate,
  .smaller-plate,
  .moonWhite-plate {
    border-radius: 50px;
    margin-bottom: 15px;
  }
  .plate,
  .smaller-plate {
    width: 50px;
  }
  .plate {
    height: 105px;
  }
  .smaller-plate {
    height: 77px;
  }
  .moonWhite-plate {
    width: 40px;
    height: 40px;
    transform: translate(-27%);
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
  .blue {
    background: #0060fb;
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
  .moonWhite-flickering {
    animation: moonWhite-flickering 2s infinite;
  }
  @keyframes moonWhite-flickering {
    0% {
      background: #565656;
    }
    50% {
      background: #c2c5cc;
    }
    100% {
      background: #565656;
    }
  }
`;

/* dwarf signals */
const DwarfSignalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  .dwarf-signal-plates,
  .dwarf-signal-plate,
  .dwarf-signal-smaller-plate,
  .vertical-support-container {
    display: flex;
  }
  .dwarf-signal-plate,
  .dwarf-signal-smaller-plate {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dwarf-signal-plates {
    align-items: flex-end;
    gap: 7px;
  }
  .dwarf-signal-smaller-plate {
    width: 30px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 60px;
  }
  .dwarf-signal-plate {
    width: 32px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 86px;
  }
  .horizontal-support {
    height: 7px;
    width: 80px;
    background: #8b939a;
  }
  .vertical-support-container {
    justify-content: space-around;
    flex-direction: row;
    gap: 1.75rem;
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
`;

const DwarfManeuveringSignalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  .dwarf-maneuvering-signal-plate {
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

const CombinedSignalsWrapper = styled.article`
  display: flex;
  align-items: flex-end;
`;

export {
  SignalWrapper,
  DwarfSignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalsWrapper,
};