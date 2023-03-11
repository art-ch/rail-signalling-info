import { Asset } from 'contentful';

import { FooterProps } from '../../components/organisms/Footer';

import { NavLinksModel } from './molecules';

export type HeaderModel = {
  logo: Asset;
  links: NavLinksModel;
};

export type FooterModel = Omit<FooterProps, 'links'> & { links: NavLinksModel };
