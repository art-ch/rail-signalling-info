import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { BigSignal, SmallSignal } from './signal-assets/Signals';
import Buttons from './page-contents/Buttons';
import Sign from './Sign';
import { aspects, signs } from './data';
import CombinedSignals from './signal-assets/CombinedSignals';

const CISPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <h1>Signals from CIS Region</h1>
      <Buttons />
      {/* {signals.map((aspect) => {
        console.log(aspect);
        const { id, name, zone, description } = aspect;
        const { entry, exit } = aspect.description;
        return (
          <article className="signal-card" key={id}>
            {name === 'moonWhite' ? (
              <CombinedSignals aspect={name} />
            ) : name === 'blue' ? (
              <SmallSignal aspect={name} />
            ) : (
              <BigSignal aspect={name} zone={zone} />
            )}
            <div className="description-container">
              <h1>{name}</h1>
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                <div>
                  <h4>Entry</h4>
                  <p>{entry}</p>
                  <h4>Exit</h4>
                  <p>{exit}</p>
                </div>
              )}
            </div>
          </article>
        );
      })} */}

      {signs.map((sign) => {
        const { id, name, description } = sign;
        return (
          <article className="signal-card" key={id}>
            <Sign name={name} />
            <div className="description-container">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </article>
        );
      })}
      <button type="button" className="btn">
        test your knowledge
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .signal-card {
    padding-bottom: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      width: 30rem;
    }
  }
`;

export default CISPage;
