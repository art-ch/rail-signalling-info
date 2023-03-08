export type CSS = Record<string, string>;

export function getCss(
  defaultCss: CSS,
  customCss: CSS = {},
  disableDefaultCss?: boolean
): CSS {
  if (disableDefaultCss) return customCss;

  return Object.keys(customCss).reduce((mergedCss, key) => {
    return {
      ...mergedCss,
      [key]: defaultCss[key]
        ? `${defaultCss[key]} ${customCss[key]}`
        : customCss[key]
    };
  }, defaultCss);
}
