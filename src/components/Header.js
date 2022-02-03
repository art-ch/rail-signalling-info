import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenterSpaceBetween } from '../styles/Mixins';
import { Links } from './Links';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <Wrapper>
        <div className="inner-centering">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <Links />
          <button
            className="menu-button"
            onClick={() => setShowLinks(!showLinks)}
          >
            <GiHamburgerMenu className="menu-button-icon" />
          </button>
        </div>
      </Wrapper>
      {showLinks && <Links mobile setShowLinks={setShowLinks} />}
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  background: var(--primary9);
  .inner-centering {
    ${flexCenterSpaceBetween};
    max-width: 1170px;
    margin: 0 auto;
  }
  .header-links {
    ${flexCenterSpaceBetween}
    gap: 2rem;
  }
  .menu-button {
    padding: 10px;
    background: transparent;
    border: none;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 688px) {
    .header-links {
      display: none;
    }
    .menu-button {
      display: block;
    }
  }
`;
