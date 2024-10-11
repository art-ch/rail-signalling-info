import React from 'react';

import { GoFilter } from 'react-icons/go';

import { Button, ButtonProps } from 'src/components/atoms/Button';

import { Input, InputProps } from 'src/components/atoms/Input';

import css from './TopFilterSection.module.scss';

export type TopFilterSectionProps = {
  filterToggler: ButtonProps;
  searchInput: InputProps;
};

export const TopFilterSection = ({
  searchInput,
  filterToggler
}: TopFilterSectionProps) => {
  return (
    <div className={css.topFilterOuterWrapper}>
      <div className={css.topFilterInnerWrapper}>
        <Button className={css.filterToggler} {...filterToggler}>
          <GoFilter className={css.filterToggler__icon} />
        </Button>
        <Input {...searchInput} />
      </div>
    </div>
  );
};
