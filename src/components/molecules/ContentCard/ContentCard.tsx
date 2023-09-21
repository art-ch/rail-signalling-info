import React, { Children, useState, cloneElement } from 'react';

import cx from 'classnames';

import { UIComponent } from 'src/types';

import css from './ContentCard.module.scss';

export type ContentCardProps = {
  children: React.ReactElement[];
} & UIComponent;

export const ContentCard = ({ children, className }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { isHovered })
  );

  return (
    <article
      className={cx(css.container, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {childrenWithProps}
    </article>
  );
};
