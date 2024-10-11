import { HandHeldSignProps } from './HandHeldSign.types';

export const isHandHeldSignWithProps = (
  props: HandHeldSignProps
): props is Exclude<HandHeldSignProps, { type: 'disc' }> => {
  return 'props' in props;
};
