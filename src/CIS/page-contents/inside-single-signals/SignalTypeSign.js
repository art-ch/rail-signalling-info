import React, { useContext } from 'react';
import { signalTypeSigns } from '../../data';
import { CISSignalContext } from '../../CISSignalContext';
import styled from 'styled-components';

const SignalTypeSign = () => {
  const { signalType } = useContext(CISSignalContext);
  console.log(signalTypeSigns);

  if (signalType !== 'all' && signalType !== 'main' && signalType !== 'fast') {
    return <Wrapper></Wrapper>;
  }

  return null;
};

export default SignalTypeSign;

const Wrapper = styled.article`
  background: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  p {
    margin: 0 3px;
  }
`;
