import pageLinkCss from '../../molecules/NavigationPageLink/NavigationPageLink.module.scss';

export const showNavigationPageLinkLoadingText = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  const link = event.target as HTMLAnchorElement;

  const loadingText = link.querySelectorAll(
    `.${pageLinkCss.loadingText}`
  ) as NodeListOf<HTMLSpanElement>;

  return loadingText.forEach((span) =>
    span.classList.add(`${pageLinkCss.showLoadingText}`)
  );
};
