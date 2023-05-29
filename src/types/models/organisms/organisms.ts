import { Asset } from 'contentful';

import { FooterProps } from '../../../components/organisms/Footer';

import { NavLinksModel } from '../molecules';

import {
  SignalInfo,
  SignalizationFilterModel,
  SignalLights
} from './organismModelHelperTypes';

export type HeaderModel = {
  logo: Asset;
  links: NavLinksModel;
};

export type FooterModel = Omit<FooterProps, 'links'> & { links: NavLinksModel };

export type SignalModel = {
  id: number;
  info: SignalInfo[];
  name: string;
  lights: SignalLights;
};

export type LocomotiveSignalizationModel = Record<string, unknown>;

export type SignModel = {
  id: number;
  sign: string;
  description: string;
};

export type SignalizationFilterListModel = {
  title: string;
  filters: SignalizationFilterModel[];
};
