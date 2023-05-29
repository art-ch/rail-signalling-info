import { FunctionComponent } from 'react';

import { SignModel } from 'src/types';
import { SignCard } from 'src/components/molecules/SignCard';

export type SignCardListProps = {
  title: string;
  signList: SignModel[];
  SignRenderer: FunctionComponent<{ id: number }>;
};

export const SignCardList = ({
  title,
  signList,
  SignRenderer
}: SignCardListProps) => (
  <section>
    <h2 className="sectionTitle large">{title}</h2>
    <div className="cardList">
      {signList.map((sign, id) => (
        <SignCard key={id} sign={sign} SignRenderer={SignRenderer} />
      ))}
    </div>
  </section>
);
