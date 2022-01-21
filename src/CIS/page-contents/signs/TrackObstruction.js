import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const TrackObstruction = ({ closed }) => {
  return (
    <SignWrapper switchPole>
      <Wrapper closed={closed}>
        <div className="pole">
          <div className="cap"></div>
          <div className="frame">
            <div className="light">
              <div className="signifying-line"></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default TrackObstruction;

const Wrapper = styled.div`
  .frame {
    background: black;
    .light {
      width: 45px;
      height: 45px;
      background: white;
      display: flex;
      align-items: center;
      .signifying-line {
        height: 10px;
        width: 45px;
        background: black;
        ${({ closed }) => closed && 'transform: rotate(90deg);'};
      }
    }
  }
`;
