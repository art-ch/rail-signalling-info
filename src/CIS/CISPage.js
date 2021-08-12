import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Signal from './signal-assets/Signal';
import Sign from './Sign';
import { aspects, signs } from './data';
import SmallSignal from './signal-assets/SmallSignal';
import CombinedSignals from './signal-assets/CombinedSignals';

const CISPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <h1>Signals from CIS Region</h1>

      <div className="btn-container">
        <button className="btn">main</button>
        <button className="btn">fast</button>
        <button className="btn">slow</button>
      </div>

      {aspects.map((aspect) => {
        const { id, name, description, flag } = aspect;
        console.log(aspect);
        return (
          <article className="signal-card" key={id}>
            {name === 'moonWhite' ? (
              <CombinedSignals aspect={name} />
            ) : name === 'blue' ? (
              <SmallSignal aspect={name} />
            ) : (
              <Signal aspect={name} flag={flag} />
            )}
            <div className="description-container">
              <h1>{name}</h1>
              <p>{description}</p>
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
