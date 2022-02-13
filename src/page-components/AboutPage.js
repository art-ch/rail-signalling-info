import React from 'react';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Wrapper>
      <h1 className="page-title">About</h1>
      <p>Hello and Welcome! My name is Artem</p>
      <p>
        I'm a huge railway fan for as long as I can remember myself. My favorite
        part about railway is signalling. When I was small I created pictures of
        each aspect on a small piece of paper with the meaning on the back.
        Sadly, with years passing by, I lost them all.
      </p>
      <p>
        Now, that I started to learn web development, I decided to recreate what
        I had in mind back then - a unified place for information about railway
        signalling systems around the world that anyone can access at any time.
      </p>
      <p>
        <strong>Disclaimer:</strong> I know, that wikipedia exists, but I want
        to create something myself or, as they say, reinvent the wheel.
      </p>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled.main`
  justify-content: flex-start;
  height: 70vh;
  margin-bottom: 5rem;
`;
