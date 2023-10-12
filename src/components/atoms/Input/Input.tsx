import React from 'react';

import { InputProps } from './Input.types';

import css from './Input.module.scss';

export const Input = ({
  type = 'text',
  placeholder = 'Please start typing',
  onChange,
  onKeyDown,
  onPaste,
  children
}: InputProps) => {
  return (
    <div className={css.container}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        className={css.input}
      />
      {children}
    </div>
  );
};
