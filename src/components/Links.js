import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexColumn } from '../styles/Mixins';

export const Links = ({ mobile, footer, setShowLinks }) => {
  const links = [
    { id: 1, linkName: 'Home', href: '/' },
    { id: 2, linkName: 'Navigation', href: 'navigate' },
    { id: 3, linkName: 'Contact', href: 'contact' },
    { id: 4, linkName: 'About', href: 'about' }
  ];

  return (
    <Wrapper
      mobile={mobile}
      className={`${
        (mobile && 'header-links-mobile') ||
        (footer && 'footer-links') ||
        'header-links'
      }`}
    >
      {links.map(({ id, linkName, href }) => {
        return (
          <li key={id} className="link">
            <Link
              className="no-underline-a"
              to={href}
              onClick={() => setShowLinks(false)}
            >
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
background: #cdcdcd;
margin-bottom: 1rem;
padding: 1rem 0;
`;

const Wrapper = styled.ul`
  ${({ mobile }) => mobile && mobileCentering}
  .link {
    padding: 10px;
    transition: var(--transition);
  }
`;
