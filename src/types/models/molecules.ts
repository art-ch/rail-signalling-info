import { Entry } from 'contentful';

import { NavLinkProps } from '../../components/molecules/NavLinks';
import { NavigationPageLinkProps } from '../../components/molecules/NavigationPageLink';

export type NavLinksModel = Entry<NavLinkProps>[];

export type NavigationPageLinkModel = Entry<
  Omit<NavigationPageLinkProps, 'handleLinkClick'>
>;

export type SignalTypeSignModel = {
  type: string;
  letters: string[];
};
