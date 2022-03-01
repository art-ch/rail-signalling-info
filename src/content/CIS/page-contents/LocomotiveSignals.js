import React, { useContext } from 'react';
import styled from 'styled-components';
import { flexColumnCenterCenter } from '../../../styled/Mixins';
import { CISSignalContext } from '../CISSignalContext';
import { locomotiveSignals } from '../data';

const LocomotiveSignals = () => {
  return (
    <section>
      <h2 className="section-title">Locomotive Signals</h2>
      {locomotiveSignals.map(({ id, name, info, lights }) => {
        return (
          <ArticleWrapper key={id}>
            <Signal lights={lights} />
            <Description name={name} data={info} />
          </ArticleWrapper>
        );
      })}
    </section>
  );
};

export default LocomotiveSignals;

const Signal = ({ lights }) => {
  const generateLights = () => {
    return Object.values(lights).map((value, id) => {
      if (id === 2) {
        return <RedYellowLight active={value} key={id} />;
      }
      return <Light active={value} key={id} />;
    });
  };

  return (
    <SignalWrapper>
      <div className="upper-frame"></div>
      <div className="box">
        <div className="frame frame-1">{generateLights()}</div>
        <div className="middle-frame"></div>
        <div className="frame frame-2">{generateLights()}</div>
      </div>
    </SignalWrapper>
  );
};

const Light = ({ active }) => {
  return (
    <LightWrapper>
      <div className={`light ${active}`}></div>
    </LightWrapper>
  );
};
const RedYellowLight = ({ active }) => {
  return (
    <LightWrapper>
      <div className="light">
        <div className={`piece upper-piece ${active && 'yellow'}`}></div>
        <div className="divider"></div>
        <div className={`piece lower-piece ${active && 'red'}`}></div>
      </div>
    </LightWrapper>
  );
};

const Description = ({ name, data }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <article>
      <h3>{name}</h3>
      <p className="description-content">
        {(zone === 'altp' && Object.values(data)[1]) || Object.values(data)[0]}
      </p>
    </article>
  );
};

const ArticleWrapper = styled.article`
  ${flexColumnCenterCenter}
  background: #dbdbdb;

  @media (min-width: 668px) {
    flex-direction: row;
    gap: 4rem;
    .description-content {
      width: 550px;
    }
  }
`;

const SignalWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .upper-frame {
    transform: translateY(25%);
    height: 20px;
    width: 60px;
    background: #6c757d;
  }
  .box {
    display: flex;
    .frame {
      background: #8b939a;
      width: 25px;
      height: 100px;
      display: grid;
      place-items: center;
    }
    .frame-1 {
      transform: translateY(-7%) skewY(30deg);
    }
    .middle-frame {
      width: 10px;
      background: #6c757d;
    }
    .frame-2 {
      transform: translateY(-7%) skewY(-30deg);
    }
  }
`;

const LightWrapper = styled.div`
  .light {
    width: 14px;
    height: 14px;
    background: #565656;
    border-radius: 50%;
  }

  .piece {
    height: 7px;
  }
  .upper-piece {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    transform: translate(-10%, -15%) rotate(-20deg);
  }
  .lower-piece {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    transform: translate(13%, -13%) rotate(-20deg);
  }

  .divider {
    background: white;
    height: 2px;
    transform: translate(1%, -53%) rotate(-20deg);
  }

  .green {
    background: #00b600;
  }
  .yellow {
    background: orange;
  }
  .red {
    background: red;
  }
  .moonWhite {
    background: white;
  }
`;
