import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter, flexColumn } from '../styles/Mixins';

export const Links = ({ mobile, footer }) => {
  const links = [
    { id: 1, linkName: 'Home', href: '/' },
    { id: 2, linkName: 'Navigation', href: '/navigate' },
    { id: 3, linkName: 'Contact', href: '/contact' },
    { id: 4, linkName: 'About', href: '/about' },
  ];

  return (
    <Wrapper
      mobile={mobile}
      footer={footer}
      className={`${mobile ? 'header-links-mobile' : 'header-links'}`}
    >
      {links.map(({ id, linkName, href }) => {
        return (
          <li key={id}>
            <Link to={href} className="link">
              {linkName}
            </Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

const mobileCentering = `
  ${flexColumn};
  align-items: flex-end;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #CDCDCD;
`;
const footer = `
  ${flexColumn};
  align-items: flex-end;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #CDCDCD;
`;

const Wrapper = styled.ul`
  ${({ mobile }) => (mobile ? mobileCentering : flexCenter)}
  gap: ${({ mobile, footer }) => (mobile || footer ? '1rem' : '2rem')};
  .link {
    padding: 10px;
  }
  .link {
    color: black;
    transition: var(--transition);
  }
`;
