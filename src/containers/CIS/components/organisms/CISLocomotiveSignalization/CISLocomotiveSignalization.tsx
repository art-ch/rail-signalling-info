import React from 'react';

import cx from 'classnames';

import { ContentCard } from 'src/components/molecules/ContentCard';
import { Description } from 'src/components/atoms/Description';

import { CISLocomotiveSignal } from '../CISLocomotiveSignal';

import { useCISSignalContext } from '../../../context/CISSignalContext';

import css from './CISLocomotiveSignalization.module.scss';

import { CISTrainProtectionZone } from 'src/containers/CIS/context/CISSignalContext.types';
import { SignalInfo, SignalLights, SignalModel } from 'src/types';

export type CISLocomotiveSignalModel = Omit<SignalModel, 'info' | 'lights'> & {
  info: Omit<SignalInfo, 'type'>;
  lights: SignalLights | 'active';
};

export type CISLocomotiveSignalizationProps = {
  title: string;
  locomotiveSignalization: CISLocomotiveSignalModel[];
};

export const CISLocomotiveSignalization = ({
  title,
  locomotiveSignalization
}: CISLocomotiveSignalizationProps) => {
  const {
    state: { trainProtectionZone }
  } = useCISSignalContext();

  return (
    <section>
      <h2 className="sectionTitle large">{title}</h2>
      <div className={cx(css.cardList, 'cardList')}>
        {locomotiveSignalization.map((locomotiveSignal) => {
          const { id, name, info, lights } = locomotiveSignal;

          const altpZone = trainProtectionZone === CISTrainProtectionZone.ALTP;

          const mainText =
            (altpZone && info.altpDescription) || info.description;

          return (
            <ContentCard key={id} className={css.contentCard}>
              <CISLocomotiveSignal
                lights={lights}
                className={css.locomotiveSignal}
              />
              <Description title={name} mainText={mainText} />
            </ContentCard>
          );
        })}
      </div>
    </section>
  );
};
