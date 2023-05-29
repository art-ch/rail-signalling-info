import cx from 'classnames';

import { Plate, PlateProps } from '../../molecules/Plate';

import { UIComponent } from '../../../types';

import css from './DwarfSignal.module.scss';

export type DwarfSignalProps = {
  plates: PlateProps[];
  horizontalSupport?: boolean;
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
          />
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
