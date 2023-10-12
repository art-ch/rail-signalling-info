import { PropsWithOptionalChildren } from 'src/types';

export type InputProps = PropsWithOptionalChildren<{
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}>;
