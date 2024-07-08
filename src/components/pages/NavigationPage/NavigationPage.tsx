import cx from 'classnames';

import {
  NavigationPageLink,
  NavigationPageLinkProps
} from '../../molecules/NavigationPageLink';

import css from './NavigationPage.module.scss';

export type NavigationPageProps = {
  title: string;
  description: string;
  links: Omit<NavigationPageLinkProps, 'handleLinkClick'>[];
};

export const NavigationPage = ({
  title,
  description,
  links
}: NavigationPageProps) => {
  return (
    <main className={css.container}>
      <div className={cx('pageHeading', 'pageHeading_withAdditionalMargin')}>
        <h1 className="pageTitle medium">{title}</h1>
        <p>{description}</p>
      </div>
      <div className={css.linksContainer}>
        {(links || []).map((link, index) => (
          <NavigationPageLink {...link} key={index} />
        ))}
      </div>
    </main>
  );
};
