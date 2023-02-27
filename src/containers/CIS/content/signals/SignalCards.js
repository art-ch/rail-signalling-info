import React, { useContext } from 'react';
import styled from 'styled-components';
import { CISSignalContext } from '../../CISSignalContext';
import { Signal, Description } from './content/ecosystems/index';

const SignalCards = ({ signals }) => {
  const { filterAspects } = useContext(CISSignalContext);
  const filteredSignalList = filterAspects(signals);

  return (
    <section>
      <h2 className="section-title">Signals</h2>
      {filteredSignalList.map(
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
  min-width: 100%;
  margin: 0 0 5rem;
  padding-top: 2rem;
  background: #dbdbdb;
`;
