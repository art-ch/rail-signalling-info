import React, { useContext } from 'react';
import styled from 'styled-components';
import { CISSignalContext } from '../../CISSignalContext';

const Description = ({ aspect, description }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <Wrapper>
      <h3 className="entity-title">{aspect}</h3>
      <div className="description-container">
        {description.map((descObj, index) => {
          return (
            <div className="single-description" key={index}>
              <h3>{descObj.type}</h3>
              <p>
                {(zone === 'atp-4' &&
                  (descObj.atp4Description || descObj.description)) ||
                  (zone === 'semi-atp' &&
                    (descObj.semiatpDescription || descObj.description)) ||
                  (zone === 'altp' &&
                    (descObj.altpDescription || descObj.description)) ||
                  descObj.description}
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  .description-container {
    display: grid;
    justify-content: center;
    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
`;
