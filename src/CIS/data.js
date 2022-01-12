export const aspects = [
  {
    id: 1,
    name: 'green',
    lights: {
      l1: null,
      l2: 'green',
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'main',
        description:
          'Passing is allowed with initial speed restrictions. Next signal is open',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through main track with initial speed restrictions. Next [route or exit] signal is open',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station and proceed with initial speed restrictions. Two or more blocks ahead are clear',
        semiatpDescription:
          'Train can leave the station and proceed with initial speed restrictions. Track is clear up to the next waypoint or station',
      },
      {
        type: 'route',
        description:
          'Passing is allowed with initial speed restrictions. Next [route or exit] signal is open',
      },
      {
        type: 'block',
        description:
          'Passing is allowed with initial speed restrictions. Two or more blocks ahead are clear',
        atp4Description:
          'Passing is allowed with initial speed restrictions. Three or more blocks ahead are clear',
      },
      { type: 'cover', description: 'cover signal description' },
      { type: 'warning', description: 'warning signal description' },
      { type: 'humping', description: 'humping signal description' },
    ],
  },
  {
    id: 2,
    name: 'yellow-flickering',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'main',
        description:
          'Passing is allowed with initial speed restrictions. Slow down. Next signal is open and sets lowered speed limit',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through main track with initial speed restrictions. Next [route or exit] signal is open and sets lowered speed limit',
      },
      {
        type: 'route',
        description:
          'Passing is allowed with initial speed restrictions. Slow down. Next signal is open and sets lowered speed limit',
      },
      {
        type: 'block',
        description:
          'Passing is allowed with initial speed restrictions. Entry signal is open and sets lowered speed limit. Train is accepted to the station through the branch track',
      },
      { type: 'warning', description: 'warning signal description' },
    ],
  },
  {
    id: 3,
    name: 'yellow',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'main',
        description:
          'Passing is allowed. Be ready to stop. Next signal is closed',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through main track. Be ready to stop. Next [route or exit] signal is closed',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station. Be ready to stop. Next signal is closed',
      },
      {
        type: 'route',
        description:
          'Passing is allowed. Be ready to stop. Next signal is closed',
      },
      {
        type: 'block',
        description:
          'Passing is allowed. Be ready to stop. Next signal is closed',
        atp4Description: 'One block ahead is free',
      },
      {
        type: 'obstruction',
        description: 'repeating before obstruction signal description',
      },
      { type: 'warning', description: 'warning signal description' },
      { type: 'repeating', description: 'repeating signal description' },
      { type: 'industrial', description: 'industrial signal description' },
      {
        type: 'technological',
        description: 'technological signal description',
      },
      { type: 'humping', description: 'humping signal description' },
    ],
  },
  {
    id: 4,
    name: 'two-yellows-flickering',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'main',
        description:
          'Passing is allowed with lowered speed. Train changes track on upcoming rail switch. Next signal is open',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station with lowered speed through branch track. Next [route or exit] signal is open.',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station with lowered speed. Train changes track on upcoming rail switch. Next signal is open',
        semiatpDescription: `Train can leave the station with lowered speed. Train changes track on upcoming rail switch. Track is clear up to the next waypoint or station. Next station's entry signal is open and doesn't have preceding warning one`,
      },
      {
        type: 'route',
        description:
          'Passing onto the branch track with lowered speed is allowed. Next [route or exit] signal is open',
      },
    ],
  },
  {
    id: 5,
    name: 'two-yellows',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'main',
        description:
          'Passing is allowed with lowered speed. Train changes track on upcoming rail switch. Be ready to stop before next signal',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track. Be ready to stop. Next route signal is closed. Next exit signal may be open in cases when track is not suited for non-stop trains, otherwise it is closed',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station with lowered speed. Train changes track on upcoming rail switch. Next signal is closed',
        semiatpDescription:
          'Train can leave the station with lowered speed. Track is clear up to the next waypoint or station',
      },
      {
        type: 'route',
        description:
          'Passing onto the branch track with lowered speed is allowed. Be ready to stop on the station. Next signal is closed',
      },
    ],
  },
  {
    id: 6,
    name: 'red',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: null,
    },
    info: [{ type: 'main', description: 'Stop! Passing is forbidden' }],
  },
  {
    id: 7,
    name: 'moonWhite',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite',
    },
    info: [
      { type: 'repeating', description: 'repeating signal description' },
      { type: 'shunting', description: 'Shunting is allowed' },
      {
        type: 'technological',
        description: 'technological signal description',
      },
    ],
  },
  {
    id: 8,
    name: 'blue',
    lights: {
      l1: null,
      l2: 'blue',
    },
    info: [{ type: 'shunting', description: 'Shunting is forbidden' }],
  },
  {
    id: 9,
    name: 'green-flickering-yellow-stripe',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing through high-speed rail switch is allowed with speed limit of 80 km/h (50 mph). Next signal is open and has the same speed restriction',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and has the same speed restriction',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 80 km/h (50 mph). Train changes track on upcoming high-speed rail switch. Next signal is open',
      },
      {
        type: 'route',
        description:
          'Train can pass onto branch track with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and has the same speed restriction',
      },
    ],
  },
  {
    id: 10,
    name: 'two-yellows-flickering-stripe',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing through rail switch is allowed with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and sets lowered speed limit',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and sets lowered speed limit',
      },
      {
        type: 'route',
        description:
          'Train can pass onto branch track with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and sets lowered speed limit',
      },
    ],
  },
  {
    id: 11,
    name: 'two-yellows-stripe',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing through rail switch is allowed with speed limit of 60 km/h (~37 mph). Be ready to stop. Next signal is closed',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track with speed limit of 60 km/h (~37 mph). Be ready to stop. Next signal is closed',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 60 km/h (~37 mph). Train changes track on upcoming high-speed rail switch. Next signal is closed',
      },
      {
        type: 'route',
        description:
          'Train can pass onto branch track with speed limit of 60 km/h (~37 mph). Be ready to stop. Next signal is closed',
      },
    ],
  },
  {
    id: 12,
    name: 'green-flickering-yellow-two-stripes',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing through rail switch is allowed with speed limit of 120 km/h (75 mph). Next signal is open and has the same speed restriction',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track with speed limit of 120 km/h (75 mph). Next [route or exit] signal is open and has the same speed restriction',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 120 km/h (75 mph). Train changes track on upcoming high-speed rail switch. Next signal is open',
      },
      {
        type: 'route',
        description:
          'Train can pass onto branch track with speed limit of 120 km/h (75 mph). Next [route or exit] signal is open and has the same speed restriction',
      },
    ],
  },
  {
    id: 13,
    name: 'two-yellows-flickering-two-stripes',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing through rail switch is allowed with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and sets lowered speed limit',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and sets lowered speed limit',
      },
      {
        type: 'route',
        description:
          'Train can pass onto branch track with speed limit of 80 km/h (50 mph). Next [route or exit] signal is open and sets lowered speed limit',
      },
    ],
  },
  {
    id: 14,
    name: 'two-yellows-two-stripes',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing through rail switch is allowed with speed limit of 60 km/h (~37 mph). Be ready to stop. Next signal is closed',
      },
      {
        type: 'entry',
        description:
          'Train can enter the station through branch track with speed limit of 60 km/h (~37 mph). Be ready to stop. Next signal is closed',
      },
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 60 km/h (~37 mph). Train changes track on upcoming high-speed rail switch. Next signal is closed',
      },
      {
        type: 'route',
        description:
          'Train can pass onto branch track with speed limit of 60 km/h (~37 mph). Be ready to stop. Next signal is closed',
      },
    ],
  },
  {
    id: 15,
    name: 'green-flickering',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'fast',
        description:
          'Passing is allowed with initial speed restrictions. Next signal is open and signalizes that train will change track on upcoming high-speed switch',
      },
      {
        type: 'entry',
        description:
          'High-Speed Switch Zone special. Passing is allowed with initial speed restrictions. Next [route or exit] signal is open and signalizes that train will change track on upcoming high-speed switch',
      },
      {
        type: 'route',
        description:
          'High-Speed Switch Zone special. Train can pass with initial speed restrictions. Next [route or exit] signal is open and signalizes that train will change track on upcoming high-speed switch',
      },
      {
        type: 'block',
        description:
          'Passing is allowed with initial speed restrictions. Entry signal is open and sets speed limit to 80 km/h (50 mph). Train is accepted to the station through the branch track',
      },
    ],
  },
  {
    id: 16,
    name: 'three-yellows',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: 'yellow',
      l4: null,
      l5: 'yellow',
    },
    info: [
      {
        type: 'special',
        description:
          'Permits Locomotive, Multiple Unit, Motorized Draisine or Kleinlok to pass onto free block of track with extreme caution up to the closed route signal. Speed limit is 15 km/h (9 mph) in private use zone, and 20km/h (12 mph) in public use zone',
      },
    ],
  },
  {
    id: 17,
    name: 'moonWhite-flickering',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite-flickering',
    },
    info: [
      {
        type: 'invitational',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
      {
        type: 'entry',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
      {
        type: 'exit',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
      {
        type: 'route',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
    ],
  },
  {
    id: 18,
    name: 'red-moonWhite-flickering',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: 'moonWhite-flickering',
    },
    info: [
      {
        type: 'invitational',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
      {
        type: 'entry',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
      {
        type: 'exit',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
      {
        type: 'route',
        description:
          'This signal allows train to pass through red or turned-off signal and proceed up to the next signal (in case of no exit signal ahead - up to the bordering pole) with speed limit of 20 km/h (12 mph) and extreme attention. Be ready to stop immediately if there is obstruction',
      },
    ],
  },
  {
    id: 19,
    name: 'green-moonWhite',
    lights: {
      l1: null,
      l2: 'green',
      l3: null,
      l4: null,
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station. Two or more blocks ahead are clear.',
      },
    ],
  },
  {
    id: 20,
    name: 'yellow-moonWhite',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 40 km/h (25 mph), pass onto the wrong-way track and proceed according to signalization inside locomotive',
        altpDescription:
          'Train can leave the station. One or two blocks ahead are clear',
      },
    ],
  },
  {
    id: 21,
    name: 'two-yellows-flickering-moonWhite',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with lowered speed. Train changes track on upcoming rail switch. Two or more blocks ahead are clear',
      },
    ],
  },
  {
    id: 22,
    name: 'two-yellows-moonWhite',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with lowered speed. Train changes track on upcoming rail switch. One block ahead is clear',
      },
    ],
  },
  {
    id: 23,
    name: 'green-flickering-yellow-moonWhite-stripe',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 80 km/h (50 mph). Train changes track on upcoming high-speed rail switch. Two or more blocks ahead are clear',
      },
    ],
  },
  {
    id: 24,
    name: 'two-yellows-moonWhite-stripe',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 60 km/h (~37 mph). Train changes track on upcoming high-speed rail switch. One block ahead is clear',
      },
    ],
  },
  {
    id: 25,
    name: 'green-flickering-yellow-moonWhite-two-stripes',
    lights: {
      l1: null,
      l2: 'green-flickering',
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 120 km/h (75 mph). Train changes track on upcoming high-speed rail switch. Two or more blocks ahead are clear',
      },
    ],
  },
  {
    id: 26,
    name: 'two-yellows-moonWhite-two-stripes',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'exit',
        description:
          'Train can leave the station with speed limit of 60 km/h (~37 mph). Train changes track on upcoming high-speed rail switch. One block ahead is clear',
      },
    ],
  },
  {
    id: 27,
    name: 'two-greens',
    lights: {
      l1: null,
      l2: 'green',
      l3: null,
      l4: 'green',
      l5: null,
    },
    info: [
      {
        type: 'special',
        description: `Special case use when there are branch line(s) without route pointer. Same meaning as 'green'`,
      },
    ],
  },
  {
    id: 28,
    name: 'two-yellows-special',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: 'yellow',
      l4: null,
      l5: null,
    },
    info: [{ type: 'special', description: 'special signal description' }],
  },
  {
    id: 29,
    name: 'yellow-flickering-moonWhite',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite',
    },
    info: [
      { type: 'entry', description: 'entry signal description' },
      { type: 'exit', description: 'exit signal description' },
    ],
  },
  {
    id: 30,
    name: 'yellow-green',
    lights: {
      l1: 'yellow',
      l2: 'green',
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'entry',
        description:
          'Used only when block length is shorter than braking distance. Passing is allowed with lowered speed',
      },
      {
        type: 'route',
        description:
          'Used only when block length is shorter than braking distance. Passing is allowed with lowered speed',
      },
      { type: 'block', description: 'Two blocks ahead are clear' },
      { type: 'humping', description: 'humping signal description' },
    ],
  },
  {
    id: 31,
    name: 'conditional',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: null,
    },
    info: [
      { type: 'conditional', description: 'conditional signal description' },
    ],
  },
  {
    id: 32,
    name: 'turned-off-signal',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'obstruction',
        description: `Normally this type of signal is turned off and in this case does not care any meaning`,
      },
    ],
  },
  {
    id: 33,
    name: 'turned-off-signal',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'repeating',
        description: `Normally this type of signal is turned off and in this case does not care any meaning`,
      },
    ],
  },
  {
    id: 34,
    name: 'moonWhite-red',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: 'moonWhite',
    },
    info: [
      {
        type: 'technological',
        description: 'technological signal description',
      },
    ],
  },
  {
    id: 35,
    name: 'route-pointer',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'other',
        description: 'route pointer description',
      },
    ],
  },
  {
    id: 36,
    name: 'route-pointer-letter',
    lights: {
      l1: 'yellow-flickering',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'other',
        description: 'route pointer description',
      },
    ],
  },
  {
    id: 37,
    name: 'route-pointer-green',
    lights: {
      l1: 'yellow',
      l2: null,
      l3: null,
      l4: 'yellow',
      l5: null,
    },
    info: [
      {
        type: 'other',
        description: 'green route pointer description',
      },
    ],
  },
  {
    id: 38,
    name: 'red-route-pointer-N',
    lights: {
      l1: null,
      l2: null,
      l3: 'red',
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'humping',
        description: 'humping signal description',
      },
    ],
  },
];

export const signalFilterButtons = [
  [
    { id: 1, name: 'all', displayName: 'all' },
    {
      id: 2,
      name: 'atp',
      displayName: 'atp zone (automatic train protection)',
    },
    { id: 3, name: 'atp-4', displayName: 'atp zone with 4 aspect signalling' },
    { id: 4, name: 'altp', displayName: 'altp zone' },
    { id: 5, name: 'semi-atp', displayName: 'semi-automatic tp zone' },
    { id: 6, name: 'private', displayName: 'private zone' },
  ],
  [
    { id: 7, name: 'all' },
    { id: 8, name: 'main', displayName: 'main aspects' },
    { id: 9, name: 'fast', displayName: 'high-speed switch aspects' },
    { id: 10, name: 'entry' },
    { id: 11, name: 'exit' },
    { id: 12, name: 'invitational' },
    { id: 13, name: 'route' },
    { id: 14, name: 'block' },
    { id: 15, name: 'conditional' },
    { id: 16, name: 'cover' },
    { id: 17, name: 'obstruction' },
    { id: 18, name: 'warning' },
    { id: 19, name: 'repeating' },
    { id: 20, name: 'industrial' },
    { id: 21, name: 'technological' },
    { id: 22, name: 'shunting' },
    { id: 23, name: 'humping' },
    { id: 24, name: 'special' },
    { id: 25, name: 'other' },
  ],
];

export const signalTypeSigns = [
  { type: 'entry', letters: ['Н', '1'] },
  { type: 'exit', letters: ['Ч', '2'] },
  { type: 'invitational', letters: ['Ч', '4'] },
  { type: 'route', letters: ['Ч', 'М'] },
  { type: 'block', letters: ['2', 'II'] },
  { type: 'conditional', letters: ['4'] },
  { type: 'cover', letters: ['Н', 'П'] },
  { type: 'obstruction', letters: ['З'] },
  { type: 'warning', letters: ['П'] },
  { type: 'repeating', letters: ['П'] },
  { type: 'shunting', letters: ['М', '4'] },
  { type: 'humping', letters: ['Г'] },
  { type: 'special', letters: ['Н', '3'] },
  { type: 'other', letters: ['Ч', '6'] },
];

export const signs = [{ id: 1, sign: 'sign-name', description: 'description' }];
