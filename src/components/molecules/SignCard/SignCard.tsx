import { FunctionComponent } from 'react';

import { ContentCard } from '../ContentCard';
import { Description } from 'src/components/atoms/Description';

import { SignModel } from 'src/types';

import css from './SignCard.module.scss';

export type SignCardProps = {
  sign: SignModel;
  SignRenderer: FunctionComponent<{ id: number }>;
};

export const SignCard = ({ sign, SignRenderer }: SignCardProps) => {
  const { id, name, description } = sign;

  return (
    <ContentCard key={id} className={css.contentCard}>
      <SignRenderer id={id} />
      <Description title={name} mainText={description} />
    </ContentCard>
  );
};
