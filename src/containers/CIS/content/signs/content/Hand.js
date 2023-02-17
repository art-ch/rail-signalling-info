import Image from 'next/image';
import styled from 'styled-components';
import rightHand from '../../../../../../public/images/hand-signs/right-hand.png';
import leftHand from '../../../../../../public/images/hand-signs/left-hand.png';
import { SignWrapper } from './StyledComponentsForSigns';

const Hand = ({ color, path, left }) => {
  return (
    <SignWrapper width="200px" color={color} path={path}>
      <Wrapper>
        <Image
          style={{ width: '96px' }}
          src={(left && leftHand) || rightHand}
          alt=""
        />
      </Wrapper>
    </SignWrapper>
  );
};

export default Hand;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    margin: 5rem 0;
  }
  @media (max-width: 375px) {
    margin: 0;
  }
`;
