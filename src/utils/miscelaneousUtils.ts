export const convertCamelCaseToTextCase = (text: string) => {
  const textWithSpacing = text.replace(/([A-Z])/g, ' $1');

  const formattedText = `${textWithSpacing
    .charAt(0)
    .toUpperCase()}${textWithSpacing.slice(1)}`;

  return formattedText;
};
