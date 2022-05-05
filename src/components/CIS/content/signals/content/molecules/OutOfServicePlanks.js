import React from 'react';
import styled from 'styled-components';

const OutOfServicePlanks = ({ id }) => {
  if (id === 39) {
    return (
      <Wrapper>
        {Array.from({ length: 2 }).map((_, id) => {
          return <div key={id} className={`plank plank-${id + 1}`}></div>;
        })}
      </Wrapper>
    );
  }
  return null;
};

export default OutOfServicePlanks;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  .plank {
    background: white;
    border: 1px solid black;
    height: 7px;
    width: 100px;
  }
  .plank-1 {
    transform: translate(-42%) rotate(30deg);
  }
  .plank-2 {
    transform: translate(-42%, -85%) rotate(-30deg);
  }
`;
