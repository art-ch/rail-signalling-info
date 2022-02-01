import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomePageTrain from '../images/homepage-train.png';
import { flexColumnCenterCenter } from '../styles/Mixins';

const HomePage = () => {
  return (
    <Wrapper>
      <div className="text-container">
        <h3 className="text">From Railfans for Railfans:</h3>
        <h1 className="text gigantic-text">Rail Signalling Info</h1>
        <p className="text">
          A unified place for information about railway signalling systems
          around the world
        </p>

        <Link to="/navigate" className="btn">
          Navigation Page
        </Link>
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.main`
  position: relative;
  height: 85vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${HomePageTrain}) 50% 70% / cover no-repeat;
  .text-container {
    ${flexColumnCenterCenter}
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .gigantic-text {
    text-align: center;
    font-size: 48px;
  }
`;
