const state = {
  yellow: null,
  green: null,
  red: null,
  bottomYellow: null,
  moonWhite: null,
};
let lightState;

const turnOnSignal = (aspect) => {
  switch (aspect) {
    case 'green':
      return (lightState = { ...state, green: 'green' });
    case 'green-flickering':
      return (lightState = { ...state, green: 'green-flickering' });
    case 'yellow':
      return (lightState = { ...state, yellow: 'yellow' });
    case 'yellow-flickering':
      return (lightState = { ...state, yellow: 'yellow-flickering' });
    case 'red':
      return (lightState = { ...state, red: 'red' });
    case 'moonWhite':
      return (lightState = { ...state, moonWhite: 'moonWhite' });
    case 'two-yellows':
    case 'two-yellows-stripe':
    case 'two-yellows-two-stripes':
      return (lightState = {
        ...state,
        yellow: 'yellow',
        bottomYellow: 'yellow',
      });
    case 'two-yellows-flickering':
    case 'two-yellows-flickering-stripe':
    case 'two-yellows-flickering-two-stripes':
      return (lightState = {
        ...state,
        yellow: 'yellow-flickering',
        bottomYellow: 'yellow',
      });
    case 'green-flickering-yellow-stripe':
    case 'green-flickering-yellow-two-stripes':
      return (lightState = {
        ...state,
        green: 'green-flickering',
        bottomYellow: 'yellow',
      });
    case 'green-moonWhite':
      return (lightState = {
        ...state,
        green: 'green',
        moonWhite: 'moonWhite',
      });
    case 'yellow-moonWhite':
      return (lightState = {
        ...state,
        yellow: 'yellow',
        moonWhite: 'moonWhite',
      });
    case 'yellow-flickering-moonWhite':
      return (lightState = {
        ...state,
        yellow: 'yellow-flickering',
        moonWhite: 'moonWhite',
      });
    case 'yellow-green':
      return (lightState = { ...state, yellow: 'yellow', red: 'green' });
    case 'two-greens':
      return (lightState = { ...state, green: 'green', bottomYellow: 'green' });
    case 'three-yellows':
      return (lightState = {
        ...state,
        yellow: 'yellow',
        red: 'yellow',
        bottomYellow: 'yellow',
      });
    default:
      throw new Error('How did you even got here pal?');
  }
};

const renderLights = (aspect, zone, signalSize) => {
  const { yellow, green, red, bottomYellow, moonWhite } = lightState;
  const BiggestSignal = {
    plate: [yellow, green, red],
    smallerPlate: [bottomYellow, moonWhite],
  };
  const BigSignal = {
    plate: [yellow, green],
    smallerPlate: [red, bottomYellow],
    moonWhitePlate: [moonWhite],
  };
  const RegularSignal = {
    plate: [yellow, green, red],
  };
  const BiggestSignalAtp4 = {
    plate: [yellow, green, red],
    smallerPlate: [bottomYellow, moonWhite],
  };
  const BigSignalAtp4 = {
    plate: [yellow, green],
    smallerPlate: [red, bottomYellow],
    moonWhitePlate: [moonWhite],
  };
  const RegularSignaAtp4 = {
    plate: [yellow, green, red],
  };
};

const renderPlates = (aspect, zone, signalSize) => {
  turnOnSignal(aspect);
  const { yellow, green, red, bottomYellow, moonWhite } = lightState;
  const arrayOfLights = {
    plate: [yellow, green, red],
    smallerPlate: [bottomYellow, moonWhite],
  };
  return Object.entries(arrayOfLights).map(
    ([outerDivClass, functions], index) => {
      return (
        <div className={outerDivClass} key={index}>
          {functions.map((fn, index) => {
            return <div className={`light ${fn}`} key={index}></div>;
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
  return [renderPlates(aspect), renderStripes(aspect)].map((fn, index) => {
    return (
      <div className="plates" key={index}>
        {fn}
      </div>
    );
  });
};
