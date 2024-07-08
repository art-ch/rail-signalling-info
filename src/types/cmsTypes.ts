import {
  EntrySkeletonType,
  Entry as ContentfulEntry,
  Asset as ContentfulAsset,
  UnresolvedLink
} from 'contentful';

export type UnresolvedEntry<T extends EntrySkeletonType> =
  | UnresolvedLink<'Entry'>
  | ContentfulEntry<T, undefined, string>;

export type Entry<T extends EntrySkeletonType> = ContentfulEntry<
  T,
  undefined,
  string
>;

export type UnresolvedAsset =
  | UnresolvedLink<'Asset'>
  | ContentfulAsset<undefined, string>;

export type Asset = ContentfulAsset<undefined, string>;
