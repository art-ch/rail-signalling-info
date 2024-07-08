import { EntryFieldTypes } from 'contentful';

import { NavLinkModel } from '../molecules';

import {
  SignalLightsAndInfo,
  GenericOrganismEntityModel
} from './organismModelHelperTypes';

export type HeaderModel = {
  contentTypeId: 'header';
  fields: {
    logo: EntryFieldTypes.AssetLink;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<NavLinkModel>>;
  };
};

export type FooterModel = {
  contentTypeId: 'footer';
  fields: {
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<NavLinkModel>>;
    copyright: EntryFieldTypes.RichText;
  };
};

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
