import React from 'react';
import { signs } from '../data';

export const Signs = () => {
  return (
    <section className="signs">
      <h2>Signs</h2>
      {signs.map((sign) => {
        const { id, name, description } = sign;
        return (
          <article className="sign-card" key={id}>
            <Sign name={name} />
            <Description description={description} />
          </article>
        );
      })}
    </section>
  );
};

const Sign = () => {
  return <h1>Sign Component</h1>;
};
const Description = () => {
  return <h1>Description Component</h1>;
};
