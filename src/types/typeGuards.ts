import { ReactNode, ReactElement, ElementType, isValidElement } from 'react';

export const isInstanceOfComponent = (
  element: ReactNode,
  component: ElementType
): element is ReactElement => {
  return isValidElement(element) && element.type === component;
};
