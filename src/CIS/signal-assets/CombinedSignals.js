import React from 'react';
import styled from 'styled-components';
import Signal from './Signal';
import SmallSignal from './SmallSignal';

const CombinedSignals = ({ aspect }) => {
  return (
    <Wrapper>
      <Signal aspect={aspect} />
      <SmallSignal aspect={aspect} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: flex-end;
`;

export default CombinedSignals;
