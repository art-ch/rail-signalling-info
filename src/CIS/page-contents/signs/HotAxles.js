import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

const HotAxles = ({ turnedOn }) => {
  return (
    <SignWrapper catenaryPoleSign width="80px">
      <Wrapper turnedOn={turnedOn}>
        <div className="catenary-pole">
          <div className="frame">
            <div className="colored-frame">
              <div className="v-letter-leg v-letter-left-leg"></div>
              <div className="v-letter-leg v-letter-right-leg"></div>
              <div className="v-letter-bottom-leg"></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

export default HotAxles;

const Wrapper = styled.div`
  .frame,
  .colored-frame,
  .v-letter-bottom-leg {
    clip-path: polygon(100% 0, 0 0, 50% 100%);
  }
  .frame,
  .colored-frame {
    background: black;
  }
  .frame {
    transform: translate(-20%, 50%);
    .v-letter-leg,
    .v-letter-bottom-leg {
      background: ${({ turnedOn }) => (turnedOn && 'white') || 'grey'};
    }
    .v-letter-leg {
      width: 40px;
      height: 8px;
    }
    .v-letter-left-leg {
      transform: translate(-31%, 50%) rotate(62deg);
    }
    .v-letter-right-leg {
      transform: translate(21%, -15%) rotate(-62deg);
    }
    .v-letter-bottom-leg {
      width: 15px;
      height: 15px;
      transform: translate(75%, 45%);
    }
  }
`;
