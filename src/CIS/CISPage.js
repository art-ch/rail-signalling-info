import React from 'react';
import Signal from './Signal';
import { aspects } from './data';

const CISPage = () => {
  return (
    <article>
      {aspects.map((aspect, index) => {
        return <Signal key={index} aspect={aspect} />;
      })}
    </article>
  );
};

export default CISPage;
