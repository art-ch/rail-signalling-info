import React from 'react';
import styled from 'styled-components';
import { flexCenterCenter, flexColumnCenter } from '../styled/Mixins';
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
  background: var(--primary5);
  background: linear-gradient(
    180deg,
    rgba(158, 108, 61, 1) 0%,
    rgba(176, 199, 228, 1) 3%,
    rgba(176, 199, 228, 1) 12%,
    rgba(158, 108, 61, 1) 16%,
    rgba(158, 108, 61, 1) 19%,
    rgba(110, 72, 35, 1) 27%,
    rgba(110, 72, 35, 1) 27%,
    rgba(55, 36, 18, 1) 29%,
    rgba(0, 0, 0, 1) 31%,
    rgba(0, 0, 0, 1) 37%,
    rgba(103, 59, 38, 1) 42%,
    rgba(103, 59, 38, 1) 65%,
    rgba(137, 96, 64, 1) 72%,
    rgba(137, 96, 64, 1) 86%,
    rgba(131, 89, 57, 1) 88%,
    rgba(92, 59, 38, 1) 91%,
    rgba(92, 59, 38, 1) 92%,
    rgba(0, 0, 0, 1) 96%,
    rgba(0, 0, 0, 1) 96%
  );
  width: 100%;
  height: 7rem;
  .footer-links {
    ${flexCenterCenter}
  }
  .made-by,
  a {
    color: white;
    margin: 0;
    font-weight: bold;
  }
`;
