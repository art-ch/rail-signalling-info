import React from 'react';
import styled from 'styled-components';
import { flexCenterCenter, flexColumnCenter } from '../styles/Mixins';
import { Links } from './Links';

const Footer = () => {
  return (
    <Wrapper>
      <Links footer />
      <p className="made-by">
        Made by <a href="https://github.com/art-ch">art-ch</a>
      </p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  ${flexColumnCenter};
  justify-content: space-around;
  background: var(--primary4);
  width: 100%;
  height: 7rem;
  .footer-links {
    ${flexCenterCenter}
  }
  .made-by {
    margin: 0;
    font-weight: bold;
  }
`;
