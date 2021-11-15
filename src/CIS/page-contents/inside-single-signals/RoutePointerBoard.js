import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import styled from 'styled-components';

const RoutePointerBoard = ({ id, aspect }) => {
  const { signalType } = useContext(CISSignalContext);
  if (id > 34) {
    return (
      <Wrapper id={id} aspect={aspect}>
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
  } else if (id === 34) {
    return (
      <Wrapper>
        <div className="frame"></div>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default RoutePointerBoard;

const Wrapper = styled.article`
  transform: translateX(-22%);
  width: 32.5px;
  height: 54.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  .frame {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .line {
    width: ${({ id }) => (id === 37 ? '25px' : '30px')};
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
      margin-right: ${({ id }) => id < 37 && '2px'};
    }
  }
  .active {
    background: ${({ aspect }) =>
      aspect === 'route-pointer-green' ? '#00b600' : 'white'};
  }
  background: black;
`;
