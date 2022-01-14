import React from 'react';
import { signs } from '../data';
import styled from 'styled-components';
import { setOfSigns } from './signs';

export const SignCards = () => {
  return (
    <SectionWrapper>
      <h2>Signs</h2>
      {signs.map(({ id, sign, description }) => {
        return (
          <article className="sign-card" key={id}>
            <Sign id={id} />
            <Description name={sign} description={description} />
          </article>
        );
      })}
    </SectionWrapper>
  );
};

const Sign = ({ id }) => {
  return setOfSigns.map(({ id: componentID, component }) => {
    if (componentID === id) {
      return <div key={componentID}>{component}</div>;
    }
    return null;
  });
};
const Description = ({ name, description }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .sign-card {
    display: flex;
    margin-bottom: 2rem;
    gap: 20rem;
  }
`;
