import React from 'react';

import cx from 'classnames';

import { ContentCard } from 'src/components/molecules/ContentCard';
import { Description } from 'src/components/atoms/Description';

import { CISLocomotiveSignal } from '../CISLocomotiveSignal';

import { useCISSignalContext } from '../../../context/CISSignalContext';

import css from './CISLocomotiveSignalization.module.scss';

import { CISLocomotiveSignalization as CISLocomotiveSignalizationType } from 'src/containers/CIS/context/CISSignalContext.types';
import { CISLocomotiveSignalizationProps } from './CISLocomotiveSignalization.types';
import { NoResults } from 'src/components/atoms/NoResults';

export const CISLocomotiveSignalization = ({
  title,
  locomotiveSignalization
}: CISLocomotiveSignalizationProps) => {
  const {
    state: { locomotiveSignalization: locomotiveSignalizationState }
  } = useCISSignalContext();

  const resultsPresent = locomotiveSignalization.length > 0;

  return (
    <section>
      <h2 className="sectionTitle large">{title}</h2>
      {!resultsPresent && <NoResults />}
      {resultsPresent && (
        <div className={cx(css.cardList, 'cardList')}>
          {locomotiveSignalization.map((locomotiveSignal) => {
            const { id, displayName, info, lights } = locomotiveSignal;

            const altpZone =
              locomotiveSignalizationState ===
              CISLocomotiveSignalizationType.ALTP;

            const mainText =
              (altpZone && info.altpDescription) || info.description;

            return (
              <ContentCard key={id} className={css.contentCard}>
                <CISLocomotiveSignal
                  lights={lights}
                  className={css.locomotiveSignal}
                />
                <Description title={displayName} mainText={mainText} />
              </ContentCard>
            );
          })}
        </div>
      )}
    </section>
  );
};
