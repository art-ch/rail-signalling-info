import { SignType } from 'src/components/molecules/Sign/Sign.types';

export type NeutralZoneAttentionProps = { type?: SignType };
export type NeutralZoneBoundariesProps = { ending?: boolean };

export type CISNeutralZoneSignProps =
  | ({ neutralZoneSignType: 'approach' } & NeutralZoneAttentionProps)
  | ({ neutralZoneSignType: 'boundaries' } & NeutralZoneBoundariesProps);
