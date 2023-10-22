import { FunctionComponent } from 'react';

import { NoResults } from 'src/components/atoms/NoResults';
import { SignalCard } from 'src/components/molecules/SignalCard';

import { SignalModel, SignalLights } from 'src/types';

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
}: SignalCardListProps) => {
  const resultsPresent = signalList.length > 0;

  return (
    <section>
      <h2 className="sectionTitle large">{title}</h2>
      {!resultsPresent && <NoResults />}
      {resultsPresent && (
        <div className="cardList">
          {signalList.map((signal, id) => {
            return (
              <SignalCard
                key={id}
                signal={signal}
                SignalRenderer={SignalRenderer}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
