import { HTMLInputTypeAttribute, ChangeEvent } from 'react';

import { PropsWithOptionalChildren } from 'src/types';

export type InputProps = PropsWithOptionalChildren<{
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}>;
