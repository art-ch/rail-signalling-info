import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Signal from './Signal';
import Sign from './Sign';
import { aspects, signs } from './data';

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
        const { id, name, description } = aspect;
        return (
          <article className="signal-card" key={id}>
            <Signal aspect={name} />
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
