import { FunctionComponent } from 'react';

import { SignModel } from 'src/types';
import { SignCard } from 'src/components/molecules/SignCard';
import { NoResults } from 'src/components/atoms/NoResults';

export type SignCardListProps = {
  title: string;
  signList: SignModel[];
  SignRenderer: FunctionComponent<{ id: number }>;
};

export const SignCardList = ({
  title,
  signList,
  SignRenderer
}: SignCardListProps) => {
  const resultsPresent = signList.length > 0;

  return (
    <section>
      <h2 className="sectionTitle large">{title}</h2>
      {!resultsPresent && <NoResults />}
      {resultsPresent && (
        <div className="cardList">
          {signList.map((sign, id) => (
            <SignCard key={id} sign={sign} SignRenderer={SignRenderer} />
          ))}
        </div>
      )}
    </section>
  );
};
