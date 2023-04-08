import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../context/CISSignalContext';
import styled from 'styled-components';

const SignalTypeSign = ({ aspect, signalSize }) => {
  const { signalType, signalTypeSigns } = useContext(CISSignalContext);

  const shouldRender = () => {
    const conditions = ['all', 'main', 'fast', 'industrial', 'technological'];

    return conditions.every((condition) => signalType !== condition);
  };

  const isElementTypeCorrect = (el) => el.type === signalType;

  const isAspectMoonWhite = () =>
    aspect === 'moonWhite' &&
    (signalSize === 'biggest' || signalSize === 'dwarf');

  const isAspectYellow = () =>
    aspect === 'yellow' && signalType === 'obstruction';

  if (shouldRender()) {
    return (
      <Wrapper signalSize={signalSize}>
        {signalTypeSigns.map((el) => {
          if (isElementTypeCorrect(el)) {
            return el.letters.map((letter, index) => {
              if (isAspectMoonWhite()) {
                return <p key={index}>{letter.replace('М', 'Ч')}</p>;
              }
              if (isAspectYellow()) {
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
