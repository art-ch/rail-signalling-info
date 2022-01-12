import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';

const Description = ({ aspect, description }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <div className="information-container">
      <h3>{aspect}</h3>
      {description.map((descObj, index) => {
        return (
          <div className="description-container" key={index}>
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
  );
};

export default Description;
