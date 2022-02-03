import React, { useContext } from 'react';
import { signs } from '../data';
import { CISSignalContext } from '../CISSignalContext';
import { setOfSigns } from './signs';
import { CombinedSignsWrapper } from './signs/StyledComponentsForSigns';

export const SignCards = () => {
  const { filteredSigns } = useContext(CISSignalContext);
  const newSignList = filteredSigns(signs);

  return (
    <section>
      <h2 className="section-title">Signs</h2>
      {newSignList.map(({ id, sign, description }) => {
        return (
          <article key={id}>
            <Sign id={id} />
            <Description name={sign} description={description} />
          </article>
        );
      })}
    </section>
  );
};

const Sign = ({ id }) => {
  return (
    <>
      {setOfSigns.map(({ id: componentID, components }) => {
        if (componentID === id) {
          return (
            <CombinedSignsWrapper key={componentID}>
              {components}
            </CombinedSignsWrapper>
          );
        }
        return null;
      })}
    </>
  );
};
const Description = ({ name, description }) => {
  return (
    <article>
      <h3 className="entity-title">{name}</h3>
      <p>{description}</p>
    </article>
  );
};
