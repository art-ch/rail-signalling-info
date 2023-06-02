import { CISSignalType } from 'src/containers/CIS/context/CISSignalContext.types';
import { SignalTypeSignModel } from 'src/types';

type GetSignalTypeSignProps = {
  signalTypeSigns: SignalTypeSignModel[];
  signalProperties: { aspect: string; nonShuntingMoonWhiteTypeSign: boolean };
  signalTypes: {
    signalType: CISSignalType;
    simplifiedSignalType: Record<string, string>;
  };
};

export const validateSignalType = (signalType: CISSignalType) => {
  const invalidConditions = [
    CISSignalType.All,
    CISSignalType.Main,
    CISSignalType.HighSpeedSwitch,
    CISSignalType.Industrial,
    CISSignalType.Technological
  ];

  return invalidConditions.every(
    (invalidCondition) => signalType !== invalidCondition
  );
};

export const getSignalTypeSign = ({
  signalProperties,
  signalTypeSigns,
  signalTypes
}: GetSignalTypeSignProps) => {
  const { aspect, nonShuntingMoonWhiteTypeSign } = signalProperties;
  const { signalType, simplifiedSignalType } = signalTypes;

  const shuntingMoonWhiteTypeSign =
    aspect === 'moonWhite' && nonShuntingMoonWhiteTypeSign;

  const obstructionYellowSignal =
    aspect === 'yellow' && signalType === CISSignalType.Obstruction;

  if (shuntingMoonWhiteTypeSign)
    return signalTypeSigns.find((sign) => sign.type === 'nonShuntingMoonWhite');

  if (obstructionYellowSignal)
    return signalTypeSigns.find((sign) => sign.type === 'obstructionYellow');

  const textElementsKey = simplifiedSignalType[signalType];

  return signalTypeSigns.find((sign) => sign.type === textElementsKey);
};
