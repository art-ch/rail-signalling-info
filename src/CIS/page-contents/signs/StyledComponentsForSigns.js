import styled from 'styled-components';

const animationPaths = {
  stop: `
  margin-left: 3rem;
  animation: stop 3s infinite linear;
  `,
  slowDown: `
  margin-left: 3rem;
  animation: slowDown 2s infinite alternate ease-in-out;
  `,
  startBreaking: `
  animation: startBreaking 1s infinite alternate ease-in-out;
  `,
  endBreaking: `
  animation: endBreaking 1s infinite alternate ease-in-out;
  `,
  damagedCatenary: `
  animation: damagedCatenary 5s infinite ease-in-out;
  `,
};

const SignWrapper = styled.div`
  width: ${({ width }) => width || '70px'};
  display: flex;
  align-items: center;
  justify-content: center;
  .pole,
  .grip,
  .frame,
  .light-frame {
    border: 1px solid black;
  }
  .pole {
    height: ${({ switchPole }) => (switchPole && '80px') || '170px'};
    width: 5px;
    background: ${({ tempPole, switchPole }) =>
      (tempPole && '#6c757d') ||
      (switchPole && 'black') ||
      `linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 10%,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 1) 36%,
      rgba(0, 0, 0, 1) 36%,
      rgba(0, 0, 0, 1) 42%,
      rgba(255, 255, 255, 1) 36%,
      rgba(255, 255, 255, 1) 76%,
      rgba(0, 0, 0, 1) 76%
    )`};
  }
  .grip {
    height: 70px;
    width: 5px;
    background: ${({ gripColor }) => gripColor};
  }
  .cap {
    width: 11px;
    height: 10px;
    background: black;
    transform: translate(-30%);
  }
  .frame,
  .light-frame {
    transform: translate(-42%, 5%);
  }
  .frame {
    ${({ roundedFrame }) => roundedFrame && 'border-radius: 50%'};
    width: 50px;
    height: 50px;
    background: white;
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .light-frame {
    height: 32px;
    width: 26px;
    background: black;
    display: grid;
    place-items: center;
  }
  .colored-frame {
    ${({ roundedFrame }) => roundedFrame && 'border-radius: 50%'};
    height: 38px;
    width: 38px;
    border: 5px solid black;
    background: ${({ innerFrameColor }) => innerFrameColor};
  }
  .light {
    background: ${({ lightColor }) => lightColor};
    margin: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  ${({ path }) => path && animationPaths[path]}

  @keyframes stop {
    from {
      transform: rotate(0deg) translateX(-50px) rotate(0deg);
    }
    to {
      transform: rotate(-360deg) translateX(-50px) rotate(360deg);
    }
  }

  @keyframes slowDown {
    from {
      transform: rotate(0deg) translateY(50px) rotate(0deg);
    }
    to {
      transform: rotate(180deg) translateY(50px) rotate(-180deg);
    }
  }

  @keyframes startBreaking {
    from {
      transform: translateY(-2rem);
    }
    to {
      transform: translateY(3rem);
    }
  }

  @keyframes endBreaking {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(5rem);
    }
  }

  @keyframes damagedCatenary {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateX(10rem);
    }
    40% {
      transform: translateX(5rem);
    }
    60% {
      transform: translate(5rem, -5rem);
    }
    80% {
      transform: translate(5rem, 0rem);
    }
    100% {
      transform: translate(0rem);
    }
  }
`;

const CombinedSignsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { SignWrapper, CombinedSignsWrapper };
