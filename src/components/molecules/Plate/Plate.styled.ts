import styled from 'styled-components';
import { flexColumnCenterCenter } from '../../../theme/Mixins';

export const StyledWrapper = styled.div`
  ${flexColumnCenterCenter}
  width: 50px;
  height: 105px;
  margin: 0.5rem 0 15px;
  transform: translate(-32%);
  background: black;
  border-radius: 50px;
`;
