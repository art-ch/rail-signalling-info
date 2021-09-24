import React from 'react';

export const ThreeAspectPlate = ({ l1, l2, l3 }) => {
  return (
    <div className="three-aspect-plate">
      <Light active={l1} />
      <Light active={l2} />
      <Light active={l3} />
    </div>
  );
};
export const TwoAspectPlate = ({ l1, l2 }) => {
  return (
    <div className="two-aspect-plate">
      <Light active={l1} />
      <Light active={l2} />
    </div>
  );
};
export const OneAspectPlate = ({ l1 }) => {
  return (
    <div className="one-aspect-plate">
      <Light active={l1} />
    </div>
  );
};

const Light = ({ active }) => {
  return <div className={`light ${active}`}></div>;
};
