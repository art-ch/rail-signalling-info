import React from 'react';

import cx from 'classnames';

import { GoFilter } from 'react-icons/go';

import { Button, ButtonProps } from 'src/components/atoms/Button';

import { Input, InputProps } from 'src/components/atoms/Input';
import { useScroll } from 'src/hooks/useScroll';

import css from './TopFilterSection.module.scss';

export type TopFilterSectionProps = {
  filterToggler: ButtonProps;
  searchInput: InputProps;
};

export const TopFilterSection = ({
  searchInput,
  filterToggler
}: TopFilterSectionProps) => {
  const {
    scrollData: { scrollDirection }
  } = useScroll();

  const scrollDown = scrollDirection === 'down';

  return (
    <div
      className={cx(css.topFilterOuterWrapper, {
        [css.hidden]: scrollDown
      })}
    >
      <div className={css.topFilterInnerWrapper}>
        <Button className={css.filterToggler} {...filterToggler}>
          <GoFilter className={css.filterToggler__icon} />
        </Button>
        <Input {...searchInput} />
      </div>
    </div>
  );
};
