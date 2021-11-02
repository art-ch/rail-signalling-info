export const aspects = [
  {
    id: 1,
    name: 'green',
    lights: {
      l1: null,
      l2: 'green',
      l3: null,
      l4: null,
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 2,
    name: 'yellow-flickering',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: null,
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' },
      { type: 'block', description: 'block signal description' }
    ]
  },
  {
    id: 3,
    name: 'yellow',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: null,
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 4,
    name: 'two-yellows-flickering',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 5,
    name: 'two-yellows',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 6,
    name: 'red',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: null
    },
    info: [{ type: 'main', description: 'Stop! Passing is forbidden' }]
  },
  {
    id: 7,
    name: 'moonWhite',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite'
    },
    info: [{ type: 'maneuvering', description: 'signal description' }]
  },
  {
    id: 8,
    name: 'blue',
    lights: {
      l1: null,
      l2: 'blue'
    },
    info: [{ type: 'maneuvering', description: 'signal description' }]
  },
  {
    id: 9,
    name: 'green-flickering-yellow-stripe',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' }
    ]
  },
  {
    id: 10,
    name: 'two-yellows-flickering-stripe',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' }
    ]
  },
  {
    id: 11,
    name: 'two-yellows-stripe',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' }
    ]
  },
  {
    id: 12,
    name: 'green-flickering-yellow-two-stripes',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' }
    ]
  },
  {
    id: 13,
    name: 'two-yellows-flickering-two-stripes',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' }
    ]
  },
  {
    id: 14,
    name: 'two-yellows-two-stripes',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' }
    ]
  },
  {
    id: 15,
    name: 'green-flickering',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: null,
      l5: null
    },
    info: [
      { type: 'main', description: 'main signal description' },
      { type: 'entry', description: 'entry signal description' },
      { type: 'block', description: 'block signal description' }
    ]
  },
  {
    id: 16,
    name: 'three-yellows',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: 'yellow',
      l4: null,
      l5: 'yellow'
    },
    info: [{ type: 'other', description: 'signal description' }]
  },
  {
    id: 17,
    name: 'moonWhite-flickering',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite-flickering'
    },
    info: [
      { type: 'invitational', description: 'invitational signal description' }
    ]
  },
  {
    id: 18,
    name: 'red-moonWhite-flickering',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: 'moonWhite-flickering'
    },
    info: [
      { type: 'invitational', description: 'invitational signal description' }
    ]
  },
  {
    id: 19,
    name: 'green-moonWhite',
    lights: {
      l1: null,
      l2: 'green',
      l3: null,
      l4: null,
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 20,
    name: 'yellow-moonWhite',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 21,
    name: 'two-yellows-flickering-moonWhite',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 22,
    name: 'two-yellows-moonWhite',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 23,
    name: 'green-flickering-yellow-moonWhite-stripe',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 24,
    name: 'two-yellows-moonWhite-stripe',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 25,
    name: 'green-flickering-yellow-moonWhite-two-stripes',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 26,
    name: 'two-yellows-moonWhite-two-stripes',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 27,
    name: 'two-greens',
    lights: {
      l1: null,
      l2: 'green',
      l3: null,
      l4: 'green',
      l5: null
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 28,
    name: 'yellow-flickering-moonWhite',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite'
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  },
  {
    id: 29,
    name: 'yellow-green',
    lights: {
      l1: 'yellow',
      l2: 'green',
      l3: null,
      l4: null,
      l5: null
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' }
    ]
  }
];

export const signs = [{ id: 1, sign: 'sign-name', description: 'description' }];

export const buttons = [
  [
    { id: 1, name: 'all', displayName: 'all' },
    { id: 2, name: 'main', displayName: 'main aspects' },
    { id: 3, name: 'fast', displayName: 'fast zone aspects' },
    {
      id: 4,
      name: 'atp',
      displayName: 'atp zone (automatic train protection)'
    },
    { id: 5, name: 'atp-4', displayName: 'atp zone with 4 aspect signalling' },
    { id: 6, name: 'altp', displayName: 'altp zone' },
    { id: 7, name: 'semi-atp', displayName: 'semi-automatic tp zone' }
  ],
  [
    { id: 8, name: 'all' },
    { id: 9, name: 'entry' },
    { id: 10, name: 'exit' },
    { id: 11, name: 'invitational' },
    { id: 12, name: 'route' },
    { id: 13, name: 'block' },
    { id: 14, name: 'cover' },
    { id: 15, name: 'obstruction' },
    { id: 16, name: 'warning' },
    { id: 17, name: 'repeating' },
    { id: 18, name: 'maneuvering' },
    { id: 19, name: 'humping' }
  ]
];
