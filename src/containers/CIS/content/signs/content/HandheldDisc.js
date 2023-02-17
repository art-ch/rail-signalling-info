import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const HandheldDisc = () => {
  return (
    <SignWrapper gripColor="#8b939a" roundedFrame>
      <Wrapper>
        <div className="grip">
          <div className="frame">
            <div className="inner-frame"></div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default HandheldDisc;

const Wrapper = styled.div`
  .frame {
    width: 30px;
    height: 30px;
    .inner-frame {
      border-radius: 50%;
      height: 22px;
      width: 22px;
      border: 3px solid black;
      background: ${({ color }) => color};
    }
  }
`;
