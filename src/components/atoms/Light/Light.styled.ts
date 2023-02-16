import styled from 'styled-components';

export const StyledWrapper = styled.div`
  &.light {
    margin: 3px;
    border-radius: 50%;
  }

  /* sizes */
  &.default {
    width: 20px;
    height: 20px;
  }
  &.small {
    width: 13px;
    height: 13px;
  }

  /* colors */
  &.turnedOff {
    background: #565656;
  }
  &.green {
    background: var(--primary7);
  }
  &.green-flickering {
    --color: var(--primary7);
    animation: flickering 2s infinite;
  }
  &.yellow {
    background: var(--primary6);
  }
  &.yellow-flickering {
    --color: var(--primary6);
    animation: flickering 2s infinite;
  }
  &.red {
    background: var(--primary8);
  }
  &.moonWhite {
    background: var(--primary9);
  }
  &.blue {
    background: var(--primary10);
  }

  /* animation */
  @keyframes flickering {
    0% {
      background: #565656;
    }
    50% {
      background: var(--color);
    }
    100% {
      background: #565656;
    }
  }
`;
