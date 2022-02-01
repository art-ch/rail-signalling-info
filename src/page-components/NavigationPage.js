import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexColumnCenter } from '../styles/Mixins';

const NavigationPage = () => {
  return (
    <Wrapper>
      <h1>Navigation</h1>
      <p>
        All signalling systems are divided by their respected country or area of
        application. Please click any link to access signals of specific
        country/area.
      </p>
      <div className="links-container">
        <div className="navigation-link">
          <Link className="zone-name" to="/CIS">
            CIS Zone
          </Link>
          <p class="zone-info">
            These signals are used on the territories of the former USSR
            countries such as Russia, Belarus, Ukraine and so on
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavigationPage;

const Wrapper = styled.main`
  .navigation-link {
    padding: 1rem;
    .zone-name {
      font-weight: bold;
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
    ), seagreen;
      color: white;
      width: 300px;
      .zone-name {
        color: blue;
      }
      .zone-info {
        display: block;
      }
      cursor: pointer;
    }
  }
`;
