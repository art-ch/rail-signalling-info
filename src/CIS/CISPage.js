import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Buttons from './assets/Buttons';
import { Signals } from './assets/Signals';
import { Signs } from './assets/Signs';
import { signs } from './data';

const CISPage = () => {
  return (
    <main>
      <Navbar />
      <Wrapper>
        <h1>Signals from CIS Region</h1>
        <Buttons />
        <Signals />
        <Signs />
        <button type="button" className="btn">
          test your knowledge
        </button>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .signal-card {
    padding-bottom: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      width: 30rem;
    }
  }
`;

export default CISPage;
