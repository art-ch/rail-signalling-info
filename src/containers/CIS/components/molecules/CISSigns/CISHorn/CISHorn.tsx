import cx from 'classnames';

import { CISSign } from '../CISSignRoot';

import { Board } from 'src/components/atoms/Board';
import { SignType } from 'src/components/molecules/Sign/Sign.types';

import { CISSignPole } from '../CISSignRoot/CISSignRoot.types';

import css from './CISHorn.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSignRoot.module.scss';

export type CISHornProps = { pole?: CISSignPole; type?: SignType };

export const CISHorn = ({ pole, type = 'standalone' }: CISHornProps) => (
  <CISSign type={type} pole={pole}>
    <Board
      className={cx(css.frame, commonCISSignCSS.frame, {
        [css.catenaryPoleSign]: type === 'onCatenaryPole'
      })}
    >
      <div className={css.upperPart}>
        <h4 className={css.signSymbol}>C</h4>
      </div>
      <div className={css.lowerPart} />
    </Board>
  </CISSign>
);
