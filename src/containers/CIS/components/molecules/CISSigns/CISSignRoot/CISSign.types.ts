import { SignProps } from 'src/components/molecules/Sign/Sign.types';

export type CISSignGripColor = 'default' | 'black';

export type CISSignProps = {
  children: React.ReactNode | React.ReactNode[];
  gripColor?: CISSignGripColor;
} & Pick<SignProps, 'type' | 'rotation'>;
