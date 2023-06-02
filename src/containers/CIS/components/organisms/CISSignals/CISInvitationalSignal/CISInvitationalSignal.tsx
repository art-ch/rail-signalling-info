import { CISSignal } from '../CISSignalRoot/CISSignal';

import { SignalLights } from 'src/types';

export type CISInvitationalSignalProps = {
  aspect: string;
  lights: SignalLights;
};

import CISSignalCSS from '../CISSignalRoot/CISSignal/CISSignal.module.scss';
import { CISSignalSignWrapper } from '../../../molecules/CISSignalSignWrapper';
import { CISSignalTypeSign } from '../../../molecules/CISSignalTypeSign';

export const CISInvitationalSignal = ({
  aspect,
  lights
}: CISInvitationalSignalProps) => {
  const { l3, l5 } = lights;

  const mainSignalProps = {
    plates: [{ lights: [{ color: l3 }] }, { lights: [{ color: l5 }] }],
    className: CISSignalCSS.regularSignalPole
  };

  const SignalElementsUnderPlates = () => (
    <CISSignalSignWrapper>
      <CISSignalTypeSign aspect={aspect} />
    </CISSignalSignWrapper>
  );

  return (
    <CISSignal
      mainSignalProps={mainSignalProps}
      SignalElementsUnderPlates={SignalElementsUnderPlates}
    />
  );
};
