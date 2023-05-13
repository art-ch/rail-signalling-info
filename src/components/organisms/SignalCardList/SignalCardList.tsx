import { FunctionComponent } from 'react';

import { ContentCard } from '../../molecules/ContentCard';
import { Signal as SignalRenderer } from 'src/containers/CIS/content/signals/content/ecosystems';

import { Signal, SignalLights } from 'src/types';
import { DescriptionBlock } from 'src/components/molecules/DescriptionBlock';
import { SignalCard } from 'src/components/molecules/SignalCard';

export type SignalCardListProps = {
  title: string;
  signalList: Signal[];
  SignalRenderer: FunctionComponent<{
    id: number;
    aspect: string;
    lights: SignalLights;
  }>;
};

export const SignalCardList = ({
  title,
  signalList,
  SignalRenderer
}: SignalCardListProps) => (
  <section>
    <h2 className="sectionTitle large">{title}</h2>
    <div className="cardList">
      {signalList.map((signal, id) => (
        <SignalCard key={id} signal={signal} SignalRenderer={SignalRenderer} />
      ))}
    </div>
  </section>
);
