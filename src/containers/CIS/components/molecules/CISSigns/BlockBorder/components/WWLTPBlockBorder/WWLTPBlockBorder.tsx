import React from 'react';

import { SpecialBlockSignalBoard } from 'src/containers/CIS/components/atoms/SpecialBlockSignalBoard';

import commonCISSignCSS from '../../../CISSignRoot/CISSign.module.scss';

export const WWLTPBlockBorder = () => (
  <div className={commonCISSignCSS.catenaryPole}>
    <SpecialBlockSignalBoard renderAsStandaloneSign />
  </div>
);
