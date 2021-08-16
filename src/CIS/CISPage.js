import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { BigSignal, SmallSignal } from './signal-assets/Signals';
import Sign from './Sign';
import { aspects, signs } from './data';
import CombinedSignals from './signal-assets/CombinedSignals';

const CISPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <h1>Signals from CIS Region</h1>

      <div className="btn-container">
        <button className="btn">all</button>
        <button className="btn">main</button>
        <button className="btn">automatic block area</button>
        <button className="btn">4 aspect automatic block area</button>
        <button className="btn">fast switches area</button>
        <button className="btn">semi-automatic block area</button>
      </div>
      <div className="btn-container">
        <button className="btn">all</button>
        <button className="btn">entry</button>
        <button className="btn">exit</button>
      </div>

      {aspects.map((aspect) => {
        const { id, name, signalDescription, flag } = aspect;
        const { entry, exit } = aspect.signalDescription;
        return (
          <article className="signal-card" key={id}>
            {name === 'moonWhite' ? (
              <CombinedSignals aspect={name} />
            ) : name === 'blue' ? (
              <SmallSignal aspect={name} />
            ) : (
              <BigSignal aspect={name} flag={flag} />
            )}
            <div className="description-container">
              <h1>{name}</h1>
              {typeof signalDescription === 'string' ? (
                <p>{signalDescription}</p>
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
      })}

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
