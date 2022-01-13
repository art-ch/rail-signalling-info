import React, { useContext } from 'react';
import { aspects } from '../data';
import { CISSignalContext } from '../CISSignalContext';
import { Signal, Description } from './inside-signal-cards-js/index';

const SignalCards = () => {
  const { zone, filterAspects } = useContext(CISSignalContext);
  const newAspects = filterAspects(aspects);

  if (newAspects.length > 0) {
    return (
      <section className="signals">
        <h2>Signals</h2>
        {newAspects.map(
          ({ id, name, lights, info }) =>
            info.length > 0 && (
              <article className="signal-card" key={id}>
                <Signal id={id} aspect={name} lights={lights} />
                <Description aspect={name} description={info} />
              </article>
            )
        )}
      </section>
    );
  }
  return <h1>No such signal type in {zone} zone</h1>;
};

export default SignalCards;
