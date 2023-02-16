import styled from 'styled-components';

import { flexColumnCenterCenter } from '../../../theme/Mixins';

type HomePageStyledWrapperProps = {
  background: string;
};

const StyledWrapper = styled.main<HomePageStyledWrapperProps>`
  position: relative;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${({ background }) => background}) 50% 80% / cover no-repeat fixed;

  .text-container {
    ${flexColumnCenterCenter}
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .gigantic-text {
    text-align: center;
    font-size: 48px;
  }
`;

export default StyledWrapper;
