import React from 'react';
import { signs } from '../data';
import { setOfSigns } from './signs';
import { CombinedSignsWrapper } from './signs/StyledComponentsForSigns';

export const SignCards = () => {
  return (
    <section>
      <h2>Signs</h2>
      {signs.map(({ id, sign, description }) => {
        return (
          <article key={id}>
            <Sign id={id} />
            <Description name={sign} description={description} />
          </article>
        );
      })}
    </section>
  );
};

const Sign = ({ id }) => {
  return (
    <CombinedSignsWrapper>
      {setOfSigns.map(({ id: componentID, component }) => {
        if (componentID === id) {
          return <div key={componentID}>{component}</div>;
        }
        return null;
      })}
    </CombinedSignsWrapper>
  );
};

const Description = ({ name, description }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
};
