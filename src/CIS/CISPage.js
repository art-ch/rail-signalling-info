import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Buttons from './page-contents/Buttons';
import SignalCards from './page-contents/SignalCards';
import { Signs } from './page-contents/Signs';

const CISPage = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <h1>Signals from CIS Region</h1>
        <Buttons />
        <SignalCards />
        <Signs />
        <button type="button" className="btn">
          test your knowledge
        </button>
      </Wrapper>
    </div>
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
