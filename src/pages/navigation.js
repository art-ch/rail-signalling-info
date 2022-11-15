import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { flexColumnCenter } from '../theme/Mixins';

const NavigationPage = () => {
  return (
    <Wrapper>
      <h1 className="page-title">Navigation</h1>
      <p>
        All signalling systems are divided by their respected country or area of
        application. Please click any link to access signals of specific
        country/area.
      </p>
      <div className="links-container">
        <div className="navigation-link">
          <Link href="/zones/cis" className="zone-name">
            <span className="link-is-loading">Please wait</span> CIS Zone{' '}
            <span className="link-is-loading">is now loading...</span>
          </Link>
          <p className="zone-info">
            These signals are used on the territories of the former USSR
            countries such as Belarus, Russia, Ukraine and so on
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavigationPage;

const Wrapper = styled.main`
  justify-content: flex-start;
  .navigation-link {
    padding: 1rem;
    .zone-name {
      font-weight: bold;
      .link-is-loading {
        display: none;
      }
    }
    .zone-info {
      margin-top: 1rem;
      display: none;
    }
    :hover {
      ${flexColumnCenter}
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.5) 100%
        ), url('/images/zone-navigation-images/cis.png') 50% 70%/cover no-repeat;
      color: white;
      width: 300px;
      .zone-name {
        color: white;
      }
      .zone-info {
        display: block;
      }
      cursor: pointer;
    }
    :active {
      .zone-name {
        text-decoration: none;
      }
      .link-is-loading {
        display: inline;
      }
    }
  }
`;
