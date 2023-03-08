export type UIComponent<T = {}> = {
  className?: string;
  customCss?: Record<string, string>;
  disableDefaultCss?: boolean;
} & T;
