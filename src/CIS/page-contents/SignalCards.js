import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { aspects } from '../data';
import { Signal, Description } from './inside-signal-cards-js/index';

const SignalCards = () => {
  const { zone } = useContext(CISSignalContext);
  let newAspects;
  console.log(newAspects);
  if (zone === 'all') {
    newAspects = aspects;
  }
  if (zone === 'main') {
    newAspects = [...aspects.slice(0, 8)];
  }
  if (zone === 'fast') {
    newAspects = [...aspects.slice(8, 14)];
  }
  if (zone === 'atp') {
    newAspects = [...aspects.slice(0, 14)];
  }
  if (zone === 'atp-4') {
    newAspects = [aspects[0], aspects[14], aspects[28], ...aspects.slice(1, 8)];
  }
  if (zone === 'altp') {
    newAspects = [...aspects.slice(18, 26), aspects[5]];
  }
  if (zone === 'semi-atp') {
    newAspects = [aspects[0], ...aspects.slice(3, 8)];
  }

  return (
    <section className="signals">
      {newAspects.map((aspect) => {
        const { id, name, lights, description } = aspect;
        return (
          <article className="signal-card" key={id}>
            <Signal id={id} aspect={name} lights={lights} />
            <Description name={name} description={description} />
          </article>
        );
      })}
    </section>
  );
};

export default SignalCards;
