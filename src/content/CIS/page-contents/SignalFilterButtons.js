import React, { useContext } from 'react';
import styled from 'styled-components';
import { CISSignalContext } from '../CISSignalContext';
import { signalFilters } from '../data';
import { flexCenterCenter } from '../../../styled/Mixins';

const SignalFilterButtons = () => {
  const { zone, signalType, filterSignals } = useContext(CISSignalContext);

  return (
    <Wrapper className="btn-wrapper">
      {signalFilters.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button) => {
              const { id, name, displayName } = button;
              return (
                <button
                  className={`btn filter-btn ${
                    (zone === name || signalType === name) && 'active'
                  }`}
                  id={id}
                  onClick={(e) => filterSignals(e, id, name)}
                  key={id}
                >
                  {displayName}
                </button>
              );
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default SignalFilterButtons;

const Wrapper = styled.section`
  margin-bottom: 0;
  .btn-container {
    ${flexCenterCenter};
    flex-wrap: wrap;
    margin-bottom: 1rem;
    border: 1px solid seagreen;
  }
  .filter-btn {
    background: white;
    color: seagreen;
    border-radius: 0;
    border: 1px solid transparent;
    cursor: pointer;
    :hover {
      border-color: seagreen;
    }
  }
  .active {
    background: seagreen;
    color: white;
  }
`;
