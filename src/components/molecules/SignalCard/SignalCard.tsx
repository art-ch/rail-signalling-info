import { FunctionComponent } from 'react';

import { ContentCard } from '../ContentCard';
import { DescriptionBlock } from 'src/components/molecules/DescriptionBlock';

import { getFormattedSignalInfo } from './SignalCard.utils';

import { SignalModel, SignalLights } from 'src/types';

export type SignalCardProps = {
  signal: SignalModel;
  SignalRenderer: FunctionComponent<{
    id: number;
    aspect: string;
    lights: SignalLights;
  }>;
};

export const SignalCard = ({ signal, SignalRenderer }: SignalCardProps) => {
  const { id, name, displayName, lights, info: signalInfo } = signal;

  const formattedSignalInfo = getFormattedSignalInfo(signalInfo);

  const signalInfoIsNotEmpty = signalInfo.length > 0;

  if (signalInfoIsNotEmpty) {
    return (
      <ContentCard key={id}>
        <SignalRenderer id={id} aspect={name} lights={lights} />
        <DescriptionBlock
          title={displayName}
          descriptionList={formattedSignalInfo}
        />
      </ContentCard>
    );
  }

  return null;
};
