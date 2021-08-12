import React from 'react';
import styled from 'styled-components';
import { BigSignal, SmallSignal } from './Signals';

const CombinedSignals = ({ aspect }) => {
  return (
    <Wrapper>
      <BigSignal aspect={aspect} />
      <SmallSignal aspect={aspect} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: flex-end;
`;

export default CombinedSignals;
