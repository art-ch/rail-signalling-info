import Link from 'next/link';

import css from './NavigationPageLink.module.scss';

export type NavigationPageLinkProps = {
  title: string;
  link: string;
  description: string;
  handleLinkClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
};

export const NavigationPageLink = ({
  title,
  link,
  description,
  handleLinkClick
}: NavigationPageLinkProps) => {
  return (
    <div className={css.container}>
      <Link
        href={link}
        className={css.zoneName}
        onClick={(e) => handleLinkClick?.(e)}
      >
        {title}
      </Link>
      <p className={css.zoneInfo}>{description}</p>
    </div>
  );
};
