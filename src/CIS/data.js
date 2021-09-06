export const aspects = [
  {
    id: 1,
    name: 'green',
    // TODO:
    // stuff here or else in reducer the following
    // *state for each aspect*: {
    //   l1: '...',
    //   l2: '...',
    //   l3: '...',
    //   l4: '...',
    //   l5: '...',
    //   'green-line': '...',
    //   'routing-display':'...',
    // EXAMPLE:
    // green: {
    //   l1: null,
    //   l2: green,
    //   l3: null,
    //   l4: null,
    //   l5: null,
    //   'green-line': null,
    //   'routing-display': null,
    // },
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 2,
    name: 'yellow',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 3,
    name: 'yellow-flickering',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 4,
    name: 'two-yellows',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 5,
    name: 'two-yellows-flickering',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 6,
    name: 'red',
    description: 'signal description',
  },
  {
    id: 7,
    name: 'moonWhite',
    description: 'signal description',
  },
  {
    id: 8,
    name: 'blue',
    description: 'signal description',
  },
  {
    id: 9,
    name: 'green-flickering-yellow-stripe',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 10,
    name: 'two-yellows-stripe',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 11,
    name: 'two-yellows-flickering-stripe',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 12,
    name: 'green-flickering-yellow-two-stripes',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 13,
    name: 'two-yellows-two-stripes',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 14,
    name: 'two-yellows-flickering-two-stripes',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 15,
    name: 'green-flickering',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 16,
    name: 'three-yellows',
    description: 'signal description',
  },
  {
    id: 17,
    name: 'green-moonWhite',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 18,
    name: 'yellow-moonWhite',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 19,
    name: 'two-greens',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 20,
    name: 'yellow-moonWhite-flickering',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
  {
    id: 21,
    name: 'yellow-green',
    description: {
      entry: 'entry signal description',
      exit: 'exit signal description',
    },
  },
];

export const signs = [{ id: 1, sign: 'sign-name', description: 'description' }];

export const filterButtons = [
  [
    { id: 1, name: 'all' },
    { id: 2, name: 'main' },
    { id: 3, name: 'atp zone (automatic train protection)' },
    { id: 4, name: 'atp zone with 4 aspect signalling' },
    { id: 5, name: 'semi-automatic tp zone' },
  ],
  [
    { id: 6, name: 'all' },
    { id: 7, name: 'entry' },
    { id: 8, name: 'exit' },
    { id: 9, name: 'route' },
    { id: 10, name: 'block' },
    { id: 11, name: 'cover' },
    { id: 12, name: 'obstruction' },
    { id: 13, name: 'warning' },
    { id: 14, name: 'repeating' },
    { id: 15, name: 'maneuvering' },
    { id: 16, name: 'humping' },
  ],
];
