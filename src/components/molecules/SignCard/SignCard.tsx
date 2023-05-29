import { FunctionComponent } from 'react';

import { ContentCard } from '../ContentCard';
import { Description } from 'src/components/atoms/Description';

import { SignModel } from 'src/types';

export type SignCardProps = {
  sign: SignModel;
  SignRenderer: FunctionComponent<{ id: number }>;
};

export const SignCard = ({ sign, SignRenderer }: SignCardProps) => {
  const { id, sign: title, description } = sign;

  return (
    <ContentCard key={id}>
      <SignRenderer id={id} />
      <Description title={title} mainText={description} />
    </ContentCard>
  );
};
