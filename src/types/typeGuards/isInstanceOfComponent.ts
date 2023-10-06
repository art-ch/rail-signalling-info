import { ReactNode, ReactElement, ElementType, isValidElement } from 'react';

export type IsInstanceOfComponentTypeGuardProps = {
  elements: ReactNode | ReactNode[];
  component: ElementType;
};

export type InstanceOfComponentProps = IsInstanceOfComponentTypeGuardProps & {
  elements: ReactElement | ReactElement[];
};

/**
 * Example of correct value for this typeguard if correct component should be Image from next/image:
 * ```
 * <YourComponent>
 *   <Image />
 * </YourComponent>
 * ```
 */
export const isInstanceOfComponent = (
  props: IsInstanceOfComponentTypeGuardProps
): props is InstanceOfComponentProps => {
  const { elements, component } = props;

  const validElement = isValidElement(elements) && elements.type === component;

  const validElements =
    Array.isArray(elements) &&
    elements.every(
      (child) => isValidElement(child) && child.type === component
    );

  return validElements || validElement;
};

/**
 * Example of correct value for this typeguard if correct component should be Image from next/image within div or without one:
 * ```
 * <YourComponent>
 *   <div>
 *     <Image />
 *   </div>
 *   <Image />
 * </YourComponent>
 * ```
 */
export const isInstanceOfComponentWithinOptionalDiv = (
  props: IsInstanceOfComponentTypeGuardProps
): props is InstanceOfComponentProps => {
  const { elements, component } = props;

  const elementIsImageOrDivWithImage =
    isValidElement(elements) &&
    (elements.type === component ||
      (elements.type === 'div' &&
        isValidElement(elements.props.children) &&
        elements.props.children.type === component));

  const elementsAreImagesOrDivsWithImages =
    Array.isArray(elements) &&
    elements.every(
      (child) =>
        isValidElement(child) &&
        (child.type === component ||
          (child.type === 'div' &&
            isValidElement((child as ReactElement).props.children) &&
            (child as ReactElement).props.children.type === component))
    );

  return elementsAreImagesOrDivsWithImages || elementIsImageOrDivWithImage;
};
