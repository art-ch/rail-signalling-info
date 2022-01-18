import { logDOM } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const HandheldLight = ({ color, path }) => {
  return (
    <Wrapper color={color} path={path}>
      <div className="grip">
        <div className="frame">
          <div className="light"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HandheldLight;

const animationPath = {
  stop: `
  margin-left: 3rem;
  animation: stop 3000ms infinite linear;
  `,
  slowDown: `
  margin-left: 3rem;
  animation: slowDown 2000ms infinite alternate ease-in-out;
  `,
  startBreaking: `
  animation: startBreaking 1000ms alternate infinite ease-in-out;
  `,
  endBreaking: `
  animation: endBreaking 1000ms alternate infinite ease-in-out;
  `,
};

const Wrapper = styled.div`
  ${({ path }) => path && animationPath[path]}
  .grip {
    height: 70px;
    width: 7px;
    background: black;
  }
  .frame {
    border: 1px solid black;
    height: 32px;
    width: 26px;
    transform: translate(-39%, 95%);
    background: black;
    display: grid;
    place-items: center;
  }
  .light {
    background: ${({ color }) => color};
    margin: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

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
`;
