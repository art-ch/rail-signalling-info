import React from 'react';
import { RichTextContent } from 'contentful';

import StyledWrapper from './HomePage.styled';
import { UIComponent } from '../../../types';
import { RichText } from '../../atoms/RichText';
import { Button, ButtonProps } from '../../atoms/Button';

export type HomePageProps = {
  background: string;
  hero: RichTextContent;
  button: ButtonProps;
} & UIComponent;

export const HomePage = ({ background, hero, button }: HomePageProps) => {
  const classNameList = {
    h1_className: 'text gigantic-text',
    h3_className: 'text',
    p_className: 'text'
  };

  return (
    <StyledWrapper background={background}>
      <div className="text-container">
        <RichText content={hero} classNameList={classNameList} />
        <Button {...button} className="btn" />
      </div>
    </StyledWrapper>
  );
};
