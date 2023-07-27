import { ImageModel } from 'src/types';

export const convertCamelCaseToTextCase = (text: string) => {
  const textWithSpacing = text.replace(/([A-Z])/g, ' $1');

  const formattedText = `${textWithSpacing
    .charAt(0)
    .toUpperCase()}${textWithSpacing.slice(1)}`;

  return formattedText;
};

export const getImageFromList = ({
  imageList,
  imageTitle,
  customDimensions
}: {
  imageList: ImageModel[];
  imageTitle: string;
  customDimensions?: { width: number; height: number };
}) => {
  const imageSign = imageList.find((imageSign) =>
    imageSign.title.includes(imageTitle)
  );

  return {
    src: imageSign?.file.url || '',
    alt: imageTitle,
    width: customDimensions?.width || imageSign?.file.details.image?.width,
    height: customDimensions?.height || imageSign?.file.details.image?.height
  };
};
