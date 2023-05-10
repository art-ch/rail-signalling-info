import React from 'react';

import {
  Description,
  DescriptionProps
} from 'src/components/atoms/Description';

export type DescriptionBlockProps = {
  title: string;
  descriptionList: DescriptionProps[];
};

export const DescriptionBlock = ({
  title,
  descriptionList
}: DescriptionBlockProps) => (
  <>
    <h2>{title}</h2>
    {descriptionList.map((singleDescription, id) => {
      const { title, mainText } = singleDescription;

      return <Description key={id} title={title} mainText={mainText} />;
    })}
  </>
);
