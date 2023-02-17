import { Plate } from '../../molecules/Plate';

import { UIComponent } from '../../../types';

import { StyledWrapper } from './Signal.styled';

type SignalChild = React.ReactElement<typeof Plate>;

export type SignalProps = {
  children: SignalChild | SignalChild[];
} & UIComponent;

export const Signal = ({ children, className }: SignalProps) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};
