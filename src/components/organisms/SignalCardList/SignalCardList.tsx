import { FunctionComponent } from 'react';

import { SignalModel, SignalLights } from 'src/types';
import { SignalCard } from 'src/components/molecules/SignalCard';

export type SignalCardListProps = {
  title: string;
  signalList: SignalModel[];
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
