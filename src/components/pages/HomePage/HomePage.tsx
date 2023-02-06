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
  return (
    <StyledWrapper background={background}>
      <div className="text-container">
        <RichText content={hero} />
        <Button {...button} className="btn" />
      </div>
    </StyledWrapper>
  );
};
