import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenterSpaceBetween, flexColumnCenter } from '../styles/Mixins';
import { Links } from './Links';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ backgroundColor }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <Wrapper backgroundColor={backgroundColor || 'white'}>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <Links className="header-links" />
        <button
          className="menu-button"
          onClick={() => setShowLinks(!showLinks)}
        >
          <GiHamburgerMenu className="menu-button-icon" />
        </button>
      </Wrapper>
      {showLinks && <Links mobile />}
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  ${flexCenterSpaceBetween};
  max-width: 1000px;
  padding: 1rem 2rem;
  background: ${({ backgroundColor }) => backgroundColor};
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
    .header-links-mobile {
      ${flexColumnCenter};
    }
  }
`;
