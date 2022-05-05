import React, { useContext } from 'react';
import { signalTypeSigns } from '../../../../data';
import { CISSignalContext } from '../../../../CISSignalContext';
import styled from 'styled-components';

const SignalTypeSign = ({ aspect, signalSize }) => {
  const { signalType } = useContext(CISSignalContext);

  const conditions = ['all', 'main', 'fast', 'industrial', 'technological'];

  if (conditions.every((condition) => signalType !== condition)) {
    return (
      <Wrapper signalSize={signalSize}>
        {signalTypeSigns.map((el) => {
          if (el.type === signalType) {
            return el.letters.map((letter, index) => {
              if (
                aspect === 'moonWhite' &&
                (signalSize === 'biggest' || signalSize === 'dwarf')
              ) {
                return <p key={index}>{letter.replace('М', 'Ч')}</p>;
              }
              if (aspect === 'yellow' && signalType === 'obstruction') {
                return (
                  <p key={index} style={{ fontSize: '10px' }}>
                    {letter.replace('З', 'ЗП')}
                  </p>
                );
              }
              return <p key={index}>{letter}</p>;
            });
          }
          return null;
        })}
      </Wrapper>
    );
  }

  return null;
};

export default SignalTypeSign;

const Wrapper = styled.div`
  background: white;
  border: 1px solid black;
  display: flex;
  margin: 0 auto;

  width: ${({ signalSize }) =>
    (signalSize === 'dwarf' || signalSize === 'dwarf-maneuvering') && '31px'};

  flex-direction: ${({ signalSize }) =>
    signalSize !== 'dwarf' && signalSize !== 'dwarf-maneuvering' && 'column'};

  p {
    margin: 0;
    padding: 1px 2px 5px;
  }
  z-index: 1;
`;
