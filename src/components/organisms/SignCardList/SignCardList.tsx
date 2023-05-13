import { FunctionComponent } from 'react';

import { Sign as SignRenderer } from 'src/containers/CIS/content/signs/SignCards';
import { ContentCard } from '../../molecules/ContentCard';

import { Sign } from 'src/types';
import { Description } from 'src/components/atoms/Description';
import { SignCard } from 'src/components/molecules/SignCard';

export type SignCardListProps = {
  title: string;
  signList: Sign[];
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
