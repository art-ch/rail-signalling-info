import React, { useContext } from 'react';
import styled from 'styled-components';
import { CISSignalContext } from '../../CISSignalContext';
import { signFilters } from '../../data';
import { flexCenterCenter } from '../../../../theme/Mixins';

const SignFilterButtons = () => {
  const { signType, filterSigns } = useContext(CISSignalContext);
  return (
    <Wrapper>
      {signFilters.map((buttonArray, index) => {
        return (
          <div className="btn-container" key={index}>
            {buttonArray.map((button) => {
              const { id, name, displayName } = button;
              return (
                <button
                  className={`btn filter-btn ${signType === name && 'active'}`}
                  id={id}
                  onClick={() => filterSigns(name)}
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

export default SignFilterButtons;

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
