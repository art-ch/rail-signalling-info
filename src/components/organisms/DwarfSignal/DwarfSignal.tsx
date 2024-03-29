import { FunctionComponent } from 'react';

import cx from 'classnames';

import { UIComponent } from '../../../types';
import { Plate, PlateProps } from '../../molecules/Plate';

import css from './DwarfSignal.module.scss';

export type DwarfSignalProps = {
  plates: PlateProps[];
  horizontalSupport?: boolean;
  ElementsOnHorizontalSupport?: FunctionComponent;
  amountOfVerticalSupports?: number;
} & UIComponent<{
  platesContainerClassName?: string;
  supportsContainerClassName?: string;
  horizontalSupportClassName?: string;
  verticalSupportContainerClassName?: string;
  verticalSupportClassName?: string;
}>;

export const DwarfSignal = ({
  plates,
  horizontalSupport = true,
  ElementsOnHorizontalSupport,
  amountOfVerticalSupports = 1,
  className,
  platesContainerClassName,
  supportsContainerClassName,
  horizontalSupportClassName,
  verticalSupportContainerClassName,
  verticalSupportClassName
}: DwarfSignalProps) => {
  return (
    <div className={cx(css.dwarfSignal, className)}>
      <div className={cx(css.platesContainer, platesContainerClassName)}>
        {plates.map((plate, idx) => (
          <Plate key={idx} {...plate} dwarfSignal />
        ))}
      </div>
      <div className={cx(css.supportsContainer, supportsContainerClassName)}>
        {horizontalSupport && (
          <div
            className={cx(css.horizontalSupport, horizontalSupportClassName)}
          >
            {ElementsOnHorizontalSupport && <ElementsOnHorizontalSupport />}
          </div>
        )}
        <div
          className={cx(
            css.verticalSupportContainer,
            verticalSupportContainerClassName
          )}
        >
          {Array.from({ length: amountOfVerticalSupports }).map((_, idx) => (
            <div
              key={idx}
              className={cx(css.verticalSupport, verticalSupportClassName)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
