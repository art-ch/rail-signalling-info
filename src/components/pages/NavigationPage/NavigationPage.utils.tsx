export const showLoadingText = (event: MouseEvent) => {
  const link = event.target as HTMLAnchorElement;

  const loadingText = link.querySelectorAll(
    '.loading-text'
  ) as NodeListOf<HTMLSpanElement>;

  return loadingText.forEach((span) => span.classList.add('show-loading-text'));
};
