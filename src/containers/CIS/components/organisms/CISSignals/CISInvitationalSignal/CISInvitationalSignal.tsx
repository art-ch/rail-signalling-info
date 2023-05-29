import { CISSignal } from '../CISSignalRoot/CISSignal';

import { SignalLights } from 'src/types';

export type CISInvitationalSignalProps = { lights: SignalLights };

import CISSignalCSS from '../CISSignalRoot/CISSignal/CISSignal.module.scss';

export const CISInvitationalSignal = ({
  lights
}: CISInvitationalSignalProps) => {
  const { l3, l5 } = lights;

  const signalProps = {
    plates: [{ lights: [{ color: l3 }] }, { lights: [{ color: l5 }] }],
    className: CISSignalCSS.regularSignalPole
  };

  return <CISSignal {...signalProps} />;
};
