import { ImageModel } from 'src/types';

export const getImageFromList = ({
  imageList,
  imageTitle,
  customDimensions
}: {
  imageList?: ImageModel[];
  imageTitle: string;
  customDimensions?: { width: number; height: number };
}) => {
  const imageSign = imageList?.find((imageSign) =>
    imageSign.title?.includes(imageTitle)
  );

  return {
    src: imageSign?.file?.url || '',
    alt: imageTitle,
    width: customDimensions?.width || imageSign?.file?.details.image?.width,
    height: customDimensions?.height || imageSign?.file?.details.image?.height
  };
};

export const convertCamelCaseToTextCase = (text: string) => {
  const textWithSpacing = text.replace(/([A-Z])/g, ' $1');

  const formattedText = `${textWithSpacing
    .charAt(0)
    .toUpperCase()}${textWithSpacing.slice(1)}`;

  return formattedText;
};

export const capitalize = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const parseAbbreviations = ({
  string,
  abbreviationList
}: {
  string: string;
  abbreviationList: Record<string, string>;
}) => {
  const sortedKeys = Object.keys(abbreviationList).sort(
    (a, b) => b.length - a.length
  );
  let result = string;

  sortedKeys.forEach((key) => {
    const value = abbreviationList[key];
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    result = result.replace(regex, value);
  });

  return result;
};

export const filterOutUndefinedValues = <T>(array?: (T | undefined)[]): T[] =>
  array?.filter((item): item is T => item !== undefined) || [];
