import cx from 'classnames';

import {
  Description,
  DescriptionProps
} from 'src/components/atoms/Description';

import css from './DescriptionBlock.module.scss';

export type DescriptionBlockProps = {
  title: string;
  descriptionList: DescriptionProps[];
};

export const DescriptionBlock = ({
  title,
  descriptionList
}: DescriptionBlockProps) => (
  <div className={css.container}>
    <h2 className={cx(css.title, 'sectionTitle medium')}>{title}</h2>
    <div className={css.descriptionList}>
      {descriptionList.map((singleDescription, id) => {
        const { title, mainText } = singleDescription;

        return (
          <Description
            key={id}
            title={title}
            mainText={mainText}
            className={css.singleDescription}
          />
        );
      })}
    </div>
  </div>
);
