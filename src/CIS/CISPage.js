import React, { useContext } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
// TODO: refactor pagecontent imports
import Buttons from './page-contents/Buttons';
import Sign from './Sign';
import { signs } from './data';
import { CISSignalContext } from './CISSignalContext';

const CISPage = () => {
  const { filterSignalsByZone } = useContext(CISSignalContext);
  return (
    <Wrapper>
      <Navbar />
      <h1>Signals from CIS Region</h1>
      <Buttons />
      {filterSignalsByZone()}
      {signs.map((sign) => {
        const { id, name, description } = sign;
        return (
          <article className="signal-card" key={id}>
            <Sign name={name} />
            <div className="description-container">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </article>
        );
      })}
      <button type="button" className="btn">
        test your knowledge
      </button>
    </Wrapper>
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
