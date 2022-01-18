import React from 'react';
import styled from 'styled-components';

const HandheldDisc = () => {
  return (
    <Wrapper>
      <div className="grip">
        <div className="disk">
          <div className="colored-disk"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HandheldDisc;

const Wrapper = styled.div`
  .grip,
  .disk {
    border: 1px solid black;
  }
  .disk,
  .colored-disk {
    border-radius: 50%;
  }
  .grip {
    height: 75px;
    width: 5px;
    background: #8b939a;
  }
  .disk {
    width: 30px;
    height: 30px;
    transform: translate(-45%, 5%);
    background: white;
    display: grid;
    place-items: center;
  }
  .colored-disk {
    height: 22px;
    width: 21px;
    border: 3px solid black;
    background: ${({ color }) => color};
  }
`;
