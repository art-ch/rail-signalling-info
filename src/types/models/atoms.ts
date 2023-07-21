import { Asset, Entry } from 'contentful';

import { ButtonProps } from '../../components/atoms/Button';

export type ImageModel = Asset['fields'];

export type ButtonModel = Entry<ButtonProps>;
