import { UIComponent } from '../../../types';
import { Light } from '../../atoms/Light';

import { StyledWrapper } from './Plate.styled';

type PlateChild = React.ReactElement<typeof Light>;

export type PlateProps = {
  children: PlateChild | PlateChild[];
} & UIComponent;

export const Plate = ({ children }: PlateProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
