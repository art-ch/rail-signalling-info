import { SignalInfo } from 'src/types';

export const getFormattedSignalInfo = (signalInfo: SignalInfo[]) =>
  signalInfo.map((singleDescription) => ({
    title: singleDescription.type,
    mainText: singleDescription.description
  }));
