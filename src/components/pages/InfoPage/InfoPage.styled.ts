import styled from 'styled-components';
import { flexColumnCenter } from '../../../theme/Mixins';

const StyledWrapper = styled.main`
  .subtitle {
    text-align: center;
  }

  .content {
    ${flexColumnCenter}
  }
`;

export default StyledWrapper;
