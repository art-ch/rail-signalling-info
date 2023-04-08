import React, { useContext } from 'react';
import styled from 'styled-components';
import { CISSignalContext } from '../../../../context/CISSignalContext';

const Description = ({ aspect, description }) => {
  const { zone } = useContext(CISSignalContext);

  const renderDescription = (descObj) => {
    const standardDescription = descObj.description;

    const isAtp4Description = () =>
      zone === 'atp-4' && (descObj.atp4Description || standardDescription);
    const isSemiAtpDescription = () =>
      zone === 'semi-atp' &&
      (descObj.semiatpDescription || standardDescription);
    const isAltpDescription = () =>
      zone === 'altp' && (descObj.altpDescription || standardDescription);

    return (
      isAtp4Description() ||
      isSemiAtpDescription() ||
      isAltpDescription() ||
      standardDescription
    );
  };

  return (
    <Wrapper>
      <h3 className="entity-title">{aspect}</h3>
      <div className="description-container">
        {description.map((descObj, index) => {
          return (
            <div className="single-description" key={index}>
              <h3>{descObj.type}</h3>
              <p>{renderDescription(descObj)}</p>
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
