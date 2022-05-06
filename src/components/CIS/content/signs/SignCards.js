import React, { useContext } from 'react';
import styled from 'styled-components';
import { flexColumnCenterCenter } from '../../../../theme/Mixins';
import { signs } from '../../data';
import { CISSignalContext } from '../../CISSignalContext';
import { setOfSigns } from './content';
import { CombinedSignsWrapper } from './content/StyledComponentsForSigns';

const SignCards = () => {
  const { filteredSigns } = useContext(CISSignalContext);
  const newSignList = filteredSigns(signs);

  return (
    <section>
      <h2 className="section-title">Signs</h2>
      {newSignList.map(({ id, sign, description }) => {
        return (
          <ArticleWrapper key={id}>
            <Sign id={id} />
            <Description name={sign} description={description} />
          </ArticleWrapper>
        );
      })}
    </section>
  );
};

export default SignCards;

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
    <DescriptionWrapper>
      <h3 className="entity-title">{name}</h3>
      <p className="description-text">{description}</p>
    </DescriptionWrapper>
  );
};

const ArticleWrapper = styled.article`
  background: #dbdbdb;
  padding-top: 1rem;
`;

const DescriptionWrapper = styled.section`
  ${flexColumnCenterCenter};
`;
