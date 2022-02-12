import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  flexCenterSpaceBetween,
  flexColumnCenter
} from '../../../styles/Mixins';
import { aspects } from '../data';
import { CISSignalContext } from '../CISSignalContext';
import { Signal, Description } from './inside-signal-cards-js/index';

const SignalCards = () => {
  const { filterAspects } = useContext(CISSignalContext);
  const newAspects = filterAspects(aspects);

  return (
    <section>
      <h2 className="section-title">Signals</h2>
      {newAspects.map(
        ({ id, name, lights, info }) =>
          info.length > 0 && (
            <Wrapper key={id}>
              <Signal id={id} aspect={name} lights={lights} />
              <Description aspect={name} description={info} />
            </Wrapper>
          )
      )}
    </section>
  );
};

export default SignalCards;

const Wrapper = styled.article`
  margin: 5rem 0;
`;
