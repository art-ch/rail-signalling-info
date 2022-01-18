import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import styled from 'styled-components';

const RoutePointerBoard = ({ id, aspect }) => {
  const { signalType } = useContext(CISSignalContext);
  if (signalType === 'humping' || (id > 35 && id < 39)) {
    return (
      <Wrapper id={id} aspect={aspect} signalType={signalType}>
        <div className="frame">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((_, lineID) => {
            if (
              aspect === 'route-pointer-letter' ||
              aspect === 'route-pointer-green'
            ) {
              return (
                <div key={lineID} className="line">
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((_, id) => {
                    if (aspect === 'route-pointer-letter') {
                      return (
                        <div
                          key={id}
                          className={`route-pointer-light ${
                            (lineID === 0 && id > 0 && 'active') ||
                            ((id === 1 || id === 4) && 'active')
                          }`}
                        ></div>
                      );
                    } else {
                      return (
                        <div
                          key={id}
                          className={`route-pointer-light ${
                            (id === 0 ||
                              id === 4 ||
                              lineID === 3 ||
                              (lineID < 3 && id === 1)) &&
                            'active'
                          }`}
                        ></div>
                      );
                    }
                  })}
                </div>
              );
            } else {
              return (
                <div key={lineID} className="line">
                  {Array.from({ length: 4 }, (_, i) => i + 1).map((_, id) => {
                    if (aspect === 'red-route-pointer-N') {
                      return (
                        <div
                          key={id}
                          className={`route-pointer-light ${
                            (lineID === 3 && 'active') ||
                            ((id === 0 || id === 3) && 'active')
                          }`}
                        ></div>
                      );
                    } else {
                      return (
                        <div key={id} className="route-pointer-light"></div>
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
      </Wrapper>
    );
  } else if (id === 35) {
    return (
      <Wrapper>
        <div className="frame">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((_, lineID) => {
            if (lineID === 0 || lineID === 1 || lineID === 5 || lineID === 6) {
              return (
                <div key={lineID} className="line">
                  {Array.from({ length: 3 }, (_, i) => i + 1).map((_, id) => {
                    return (
                      <div
                        key={id}
                        className={`route-pointer-light ${
                          (((lineID === 0 || lineID === 1) && id === 2) ||
                            ((lineID === 5 || lineID === 6) && id === 0)) &&
                          'active'
                        }
                        ${(lineID === 0 || lineID === 6) && 'margin-h-1'}
                        ${(lineID === 1 || lineID === 5) && 'margin-h-n-1'}
                        `}
                      ></div>
                    );
                  })}
                </div>
              );
            } else if (lineID === 2 || lineID === 4) {
              return (
                <div key={lineID} className="line">
                  {Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                    return (
                      <div
                        key={id}
                        className={`route-pointer-light margin-h-n-2 ${
                          ((lineID === 2 && id === 1) ||
                            (lineID === 4 && id === 0)) &&
                          'active'
                        }
                        `}
                      ></div>
                    );
                  })}
                </div>
              );
            } else {
              return (
                <div key={lineID} className="line">
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((_, id) => {
                    return (
                      <div
                        key={id}
                        className={`route-pointer-light ${
                          id === 2 && 'active'
                        }`}
                      ></div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default RoutePointerBoard;

const Wrapper = styled.div`
  transform: translateX(-23%);
  width: 32.5px;
  height: 54.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  margin-bottom: 1rem;
  .frame {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .line {
    width: ${({ id, signalType }) =>
      id === 38 || signalType === 'humping' ? '25px' : '30px'};
    height: 5px;
    margin-bottom: 2px;
    display: flex;
    justify-content: space-evenly;
  }
  .route-pointer-light {
    background: #565656;
    border-radius: 50%;
    height: 5px;
    width: 5px;
    :first-child {
      margin-right: ${({ id }) => id < 38 && '2px'};
    }
  }
  .active {
    background: ${({ aspect }) =>
      aspect === 'route-pointer-green' ? '#00b600' : 'white'};
  }

  .margin-h-1 {
    margin: 0 2px;
  }
  .margin-h-n-1 {
    margin: 0 -4px;
  }
  .margin-h-n-2 {
    margin: 0 -6px;
  }
`;
