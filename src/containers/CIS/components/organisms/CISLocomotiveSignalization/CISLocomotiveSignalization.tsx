import { ContentCard } from 'src/components/molecules/ContentCard';
import { Description } from 'src/components/atoms/Description';

import { Signal as CISLocomotiveSignalRenderer } from 'src/containers/CIS/content/signals/LocomotiveSignals';

import { useCISSignalContext } from '../../../context/CISSignalContext';

import { CISTrainProtectionZone } from 'src/containers/CIS/context/CISSignalContext.types';

import { SignalLights } from 'src/types';

export type CISLocomotiveSignal = {
  id: number;
  name: string;
  info: { description: string; altpDescription?: string };
  lights: SignalLights;
};

export type CISLocomotiveSignalizationProps = {
  title: string;
  locomotiveSignalization: CISLocomotiveSignal[];
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
      <div className="cardList">
        {locomotiveSignalization.map((locomotiveSignal) => {
          const { id, name, info, lights } = locomotiveSignal;

          const altpZone = trainProtectionZone === CISTrainProtectionZone.ALTP;

          const mainText =
            (altpZone && info.altpDescription) || info.description;

          return (
            <ContentCard key={id}>
              <CISLocomotiveSignalRenderer lights={lights} />
              <Description title={name} mainText={mainText} />
            </ContentCard>
          );
        })}
      </div>
    </section>
  );
};
