import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { Signal, Description } from './inside-signal-cards-js/index';

const SignalCards = () => {
  const { filterAspectsByZone, filterAspectsBySignalType } =
    useContext(CISSignalContext);
  const aspects = filterAspectsByZone();
  return (
    <section className="signals">
      {aspects.map((aspect) => {
        const { id, name, lights, description } = aspect;
        return (
          <article className="signal-card" key={id}>
            <Signal id={id} aspect={name} lights={lights} />
            <Description
              aspect={name}
              description={filterAspectsBySignalType(name, description)}
            />
          </article>
        );
      })}
    </section>
  );
};

export default SignalCards;
