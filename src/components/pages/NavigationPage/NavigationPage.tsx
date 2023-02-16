import {
  NavigationPageLink,
  NavigationPageLinkProps
} from '../../molecules/NavigationPageLink';

import { showLoadingText } from './NavigationPage.utils';

import { StyledWrapper } from './NavigationPage.styled';

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
    <StyledWrapper>
      <h1 className="page-title">{title}</h1>
      <p>{description}</p>
      <div className="links-container">
        {links.map((link, index) => (
          <NavigationPageLink
            {...link}
            key={index}
            handleLinkClick={showLoadingText}
          />
        ))}
      </div>
    </StyledWrapper>
  );
};
