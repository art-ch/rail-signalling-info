const yellowLight = (aspect) => {
  switch (aspect) {
    case 'yellow':
    case 'two-yellows':
    case 'two-yellows-stripe':
    case 'two-yellows-two-stripes':
    case 'three-yellows':
    case 'yellow-green':
    case 'yellow-moonWhite':
      return 'yellow';
    case 'yellow-flickering':
    case 'two-yellows-flickering':
    case 'two-yellows-flickering-stripe':
    case 'two-yellows-flickering-two-stripes':
    case 'yellow-moonWhite-flickering':
      return 'yellow-flickering';
    default:
      return null;
  }
};
const greenLight = (aspect) => {
  switch (aspect) {
    case 'green':
    case 'green-moonWhite':
    case 'two-greens':
      return 'green';
    case 'green-flickering':
    case 'green-flickering-yellow-stripe':
    case 'green-flickering-yellow-two-stripes':
      return 'green-flickering';
    default:
      return null;
  }
};
const redLight = (aspect) => {
  switch (aspect) {
    case 'red':
      return 'red';
    case 'yellow-green':
      return 'green';
    case 'three-yellows':
      return 'yellow';
    default:
      return null;
  }
};
const bottomYellowLight = (aspect) => {
  switch (aspect) {
    case 'two-yellows':
    case 'two-yellows-stripe':
    case 'two-yellows-two-stripes':
    case 'two-yellows-flickering':
    case 'two-yellows-flickering-stripe':
    case 'two-yellows-flickering-two-stripes':
    case 'green-flickering-yellow-stripe':
    case 'green-flickering-yellow-two-stripes':
      return 'yellow';
    case 'two-greens':
      return 'green';
    default:
      return null;
  }
};
const moonWhiteLight = (aspect) => {
  switch (aspect) {
    case 'moonWhite':
    case 'green-moonWhite':
    case 'yellow-moonWhite':
    case 'yellow-moonWhite-flickering':
      return 'moon-white';
    case 'three-yellows':
      return 'yellow';
    default:
      return null;
  }
};

const renderPlates = (aspect) => {
  const arrayOfLights = {
    plate: [yellowLight, greenLight, redLight],
    smallerPlate: [bottomYellowLight, moonWhiteLight],
  };
  return Object.entries(arrayOfLights).map(
    ([outerDivClass, functions], index) => {
      return (
        <div className={outerDivClass} key={index}>
          {functions.map((fn) => {
            return (
              // solve unique key prop issue
              <div className={`light ${fn(aspect)}`}></div>
            );
          })}
        </div>
      );
    }
  );
};

const renderStripes = (aspect) => {
  if (
    aspect === 'two-yellows-stripe' ||
    aspect === 'two-yellows-flickering-stripe' ||
    aspect === 'green-flickering-yellow-stripe'
  ) {
    return (
      <div className="green-line-container">
        {Array.from(Array(3)).map((_, index) => {
          return <div className="green-line-light" key={index}></div>;
        })}
      </div>
    );
  }
  if (
    aspect === 'two-yellows-two-stripes' ||
    aspect === 'two-yellows-flickering-two-stripes' ||
    aspect === 'green-flickering-yellow-two-stripes'
  ) {
    return Array.from(Array(2)).map((_, index) => {
      return (
        <div className="green-line-container" key={index}>
          {Array.from(Array(3)).map((_, index) => {
            return <div className="green-line-light" key={index}></div>;
          })}
        </div>
      );
    });
  }
};

export const renderSignal = (aspect) => {
  const plates = renderPlates(aspect);
  const stripes = renderStripes(aspect);
  return [plates, stripes];
};
