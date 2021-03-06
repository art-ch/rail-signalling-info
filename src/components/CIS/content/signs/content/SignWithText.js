import React from 'react';
import styled from 'styled-components';
import { SignWrapper } from './StyledComponentsForSigns';

export const SignWithText = ({
  pole,
  exclamation,
  line,
  text,
  rectangular,
  catenarySign,
  red,
}) => {
  return (
    <SignWrapper width={rectangular ? '110px' : '90px'} catenaryPoleSign>
      <Wrapper
        pole={pole}
        red={red}
        rectangular={rectangular}
        catenarySign={catenarySign}
      >
        <div className={pole}>
          <div className="frame">
            {rectangular ? (
              <RectangularOne text={text} />
            ) : (
              <SmallOne exclamation={exclamation} line={line} text={text} />
            )}
          </div>
        </div>
      </Wrapper>
    </SignWrapper>
  );
};

const SmallOne = ({ exclamation, line, text }) => {
  return (
    <div>
      {exclamation && <h2 className="exclamation">!</h2>}
      <div className={line}></div>
      <h3
        className={`sign-text ${
          exclamation ? 'small-sign-small-text' : 'small-sign-text'
        }`}
      >
        {text}
      </h3>
      {line === 'vertical-line' && <div className="vertical-line-bottom"></div>}
    </div>
  );
};

const RectangularOne = ({ text }) => {
  return <h3 className="rectangular-sign-text sign-text">{text}</h3>;
};

const Wrapper = styled.div`
  .frame {
    ${({ rectangular }) => rectangular && 'width: 5rem'};
    ${({ pole, rectangular }) =>
      pole && rectangular && 'transform: translate(-45%, 5%)'};
    ${({ catenarySign }) => catenarySign && 'transform: translate(0)'};
    border: 3px solid ${({ red }) => (red ? 'red' : 'black')};
    position: relative;
  }
  .exclamation,
  .diagonal-line,
  .small-sign-small-text {
    position: absolute;
  }
  .exclamation {
    inset: -2px 4px;
  }
  .diagonal-line,
  .horizontal-line,
  .vertical-line,
  .vertical-line-bottom {
    background: black;
  }
  .diagonal-line {
    inset: 25px -10px;
    height: 2px;
    width: 70px;
    transform: rotate(-45deg);
  }
  .small-sign-text {
    text-align: center;
    ${({ red }) => red && 'color: red'}
  }
  .small-sign-small-text {
    bottom: 1px;
    right: 3px;
    font-size: 12px;
  }
  .horizontal-line,
  .vertical-line,
  .vertical-line-bottom {
    height: 10px;
  }
  .horizontal-line {
    transform: translateY(0%);
    width: 52px;
  }
  .vertical-line {
    transform: rotate(90deg) translate(5%, -150%);
    width: 21px;
  }
  .vertical-line-bottom {
    transform: rotate(90deg) translate(15%, -175%);
    width: 16px;
  }
  .rectangular-sign-text {
    text-align: center;
    font-size: ${({ catenarySign }) => (catenarySign ? '9px' : '11px')};
    word-break: break-word;
  }
`;
