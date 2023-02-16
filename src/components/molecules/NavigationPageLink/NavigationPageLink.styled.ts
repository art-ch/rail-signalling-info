import styled from 'styled-components';

import { flexColumnCenter } from '../../../theme/Mixins';

type StyledWrapperProps = {
  background?: string;
};

export const StyledWrapper = styled.div<StyledWrapperProps>`
  padding: 1rem;

  .zone-name {
    font-weight: bold;
    .loading-text {
      display: none;
    }
    .show-loading-text {
      display: inline-flex;
      gap: 1rem;
    }
  }
  .zone-info {
    margin-top: 1rem;
    display: none;
  }
  :hover {
    ${flexColumnCenter}
    background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        url(${({ background }) => background}) 50% 80% / cover no-repeat;
    color: white;
    width: 300px;
    .zone-name {
      color: white;
    }
    .zone-info {
      display: block;
    }
    cursor: pointer;
  }
`;
