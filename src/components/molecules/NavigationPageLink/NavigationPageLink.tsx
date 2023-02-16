import Link from 'next/link';

import { StyledWrapper } from './NavigationPageLink.styled';

export type NavigationPageLinkProps = {
  title: string;
  link: string;
  description: string;
  handleLinkClick: (event: MouseEvent) => void;
  background?: string;
};

export const NavigationPageLink = ({
  title,
  link,
  background,
  description,
  handleLinkClick
}: NavigationPageLinkProps) => {
  return (
    <StyledWrapper background={background}>
      <Link
        href={link}
        className="zone-name"
        onClick={(e) => handleLinkClick(e)}
      >
        <span className="loading-text">Please wait</span> {title}{' '}
        <span className="loading-text">is now loading...</span>
      </Link>
      <p className="zone-info">{description}</p>
    </StyledWrapper>
  );
};
