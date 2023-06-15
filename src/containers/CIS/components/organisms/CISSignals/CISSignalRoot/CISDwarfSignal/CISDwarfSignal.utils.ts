import { CISSignalSignRendererProps } from '../../../CISSignalSignRenderer';

export const formatCISDwarfSignalSignRendererProps = (
  cisSignalSignRendererProps?: CISSignalSignRendererProps
) => {
  const { signalTypeSign } = cisSignalSignRendererProps || {};

  const formattedSignalTypeSign = {
    ...signalTypeSign,
    placeElementsHorizontally: true
  };

  return {
    ...cisSignalSignRendererProps,
    signalTypeSign: formattedSignalTypeSign
  };
};
