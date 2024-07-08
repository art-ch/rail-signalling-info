import { EntryFieldTypes } from 'contentful';

import {
  LocomotiveSignalizationModel,
  SignModel,
  SignalTypeSignModel,
  SignalizationFilterListModel
} from '..';

import { FooterModel, HeaderModel, SignalModel } from './organisms/organisms';

export type WebsiteModel = {
  contentTypeId: 'layout';
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<HeaderModel | FooterModel>
    >;
  };
};

export type ZonePageContentModel = {
  contentTypeId: 'content';
  fields: {
    signals: EntryFieldTypes.Object<SignalModel[]>;
    signalTypeSigns: EntryFieldTypes.Object<SignalTypeSignModel[]>;
    signalFilters: EntryFieldTypes.Object<SignalizationFilterListModel[]>;
    signs: EntryFieldTypes.Object<SignModel[]>;
    imageSigns: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    signFilters: EntryFieldTypes.Object<SignalizationFilterListModel[]>;
    locomotiveSignalization?: EntryFieldTypes.Object<
      LocomotiveSignalizationModel[]
    >;
    locomotiveSignalizationFilters?: EntryFieldTypes.Object<
      SignalizationFilterListModel[]
    >;
  };
};
