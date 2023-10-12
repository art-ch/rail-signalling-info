import { Asset } from 'contentful';

import { FooterProps } from '../../../components/organisms/Footer';

import { NavLinksModel } from '../molecules';

import {
  SignalLightsAndInfo,
  GenericOrganismEntityModel
} from './organismModelHelperTypes';

export type HeaderModel = {
  logo: Asset;
  links: NavLinksModel;
};

export type FooterModel = Omit<FooterProps, 'links'> & { links: NavLinksModel };

export type SignalModel = GenericOrganismEntityModel & SignalLightsAndInfo;

export type LocomotiveSignalizationModel<
  ZoneSpecificSignalizationModel = unknown
> = GenericOrganismEntityModel & ZoneSpecificSignalizationModel;

export type SignModel = GenericOrganismEntityModel & {
  description: string;
};

export type SignalizationFilterListModel = {
  title: string;
  filters: GenericOrganismEntityModel[];
};
