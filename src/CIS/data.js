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
      {
        type: 'cover',
        description: 'Passing is allowed with initial speed restrictions',
      },
      {
        type: 'warning',
        description: 'Passing is allowed with initial speed restrictions',
      },
      { type: 'repeating', description: 'Main signal is open' },
      {
        type: 'humping',
        description: 'Pushing is allowed with initial speed limit',
      },
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
      {
        type: 'warning',
        description:
          'Passing is allowed with initial speed restrictions. Entry signal is open and sets lowered speed limit. Train is accepted to the station through the branch track',
      },
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
        description:
          'Passing is allowed. Be ready to stop. Main signal is closed',
      },
      { type: 'warning', description: 'warning signal description' },
      {
        type: 'repeating',
        description:
          'Private zone only. [Entry, exit, technological] signal is open',
      },
      {
        type: 'industrial',
        description: 'Entry to (exit from) industrial building is allowed',
      },
      {
        type: 'technological',
        description: 'Push cars into the object on the track',
      },
      { type: 'humping', description: 'Pushing allowed with lowered speed' },
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
      {
        type: 'repeating',
        description: 'Private zone only. Shunting signal is open',
      },
      { type: 'shunting', description: 'Shunting is allowed' },
      {
        type: 'technological',
        description: 'Push all cars away from the object on the track',
      },
      {
        type: 'humping',
        description:
          'Allows humping locomotive to pass the hump, proceed onto the hump yard to perform shunting.',
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
        description: `Special case use when there are branch line without route pointer. Same meaning as 'green'`,
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
    info: [
      {
        type: 'special',
        description:
          'Used only when block length is shorter than braking distance. Passing onto the branch track is allowed. Be ready to stop before next turned off or red [route or exit] signal',
      },
    ],
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
      {
        type: 'humping',
        description:
          'Pushing is allowed. Speed limit is in range between initial and lowered',
      },
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
      {
        type: 'conditional',
        description:
          'Allows freight train to pass red signal with speed limit of 20 km/h (~12 mph) and extreme attention. Be ready to stop immediately if there is obstruction on the way',
      },
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
        description: `Proceed with extreme attention. Be ready to stop before closed main signal`,
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
        description:
          'Maintenance aspect. Push all cars away from the object on the track',
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
        description: 'Shows direction in which train is going to be accepted',
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
        description:
          'Shows letter or number of track on which train is going to be accepted',
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
        description: 'Shows number of track from which departure is allowed',
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
        description:
          'Direct cars from hump onto tracks of receiving yard or reserved station track',
      },
    ],
  },
  {
    id: 39,
    name: 'out-of-service',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: null,
    },
    info: [
      {
        type: 'other',
        description:
          'Out of service signals should be turned off and protected with 2 crossing planks',
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

export const locomotiveSignals = [
  {
    id: 1,
    name: 'green',
    lights: {
      l1: 'green',
      l2: null,
      l3: null,
      l4: null,
      l5: null,
    },
    info: {
      description:
        'Movement is allowed. Track signal shows [green/yellow flickering/green flickering/two greens/green yellow] light',
      altpDescription:
        'Movement is allowed with initial speed restrictions. Three or more blocks ahead are clear',
    },
  },
  {
    id: 2,
    name: 'yellow',
    lights: {
      l1: null,
      l2: 'yellow',
      l3: null,
      l4: null,
      l5: null,
    },
    info: {
      description:
        'Movement is allowed. Track signal shows [yellow/yellow flickering] light or any other light that indicates track changing on upcoming rail switch',
      altpDescription:
        'Movement is allowed with lowered speed. One or two blocks ahead are free',
    },
  },
  {
    id: 3,
    name: 'redyellow',
    lights: {
      l1: null,
      l2: null,
      l3: 'active',
      l4: null,
      l5: null,
    },
    info: {
      description: 'Movement is allowed. Track signal is red.',
      altpDescription:
        'Movement is allowed. Be ready to stop before "block border" sign. Next block is occupied',
    },
  },
  {
    id: 4,
    name: 'red',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: 'red',
      l5: null,
    },
    info: {
      description: 'You passed red signal!',
      altpDescription: 'You passed into occupied block!',
    },
  },
  {
    id: 5,
    name: 'moonWhite',
    lights: {
      l1: null,
      l2: null,
      l3: null,
      l4: null,
      l5: 'moonWhite',
    },
    info: {
      description:
        'Locomotive devices are turned on, but track signals are not transmitting anything to the locomotive one. Driver should only rely on track signals',
      altpDescription:
        'Locomotive devices are turned on, but track signals are not transmitting anything to the locomotive one',
    },
  },
];

export const signs = [
  {
    id: 1,
    sign: 'Clear',
    description: `Used by station master. Allows train to depart the station or it pass non-stop`,
  },
  {
    id: 2,
    sign: 'Train Is Allowed On Main Track',
    description: `Folded yellow flag during day and handheld white light during the night. Used by security and railway crossing stuff. Clear to pass non-stop with authorised speed. If there is no authorisation, speed limit is 25 km/h (15 mph) in regular zone and 15 km/h (~9 mph) in private zone`,
  },
  {
    id: 3,
    sign: 'Train Is Received On Branch Track',
    description: `Opened yellow flag during day and handheld yellow light during the night. Used by security and railway crossing stuff. Train goes onto branch track. Yellow light should only be used within station boundaries`,
  },
  {
    id: 4,
    sign: 'Stop',
    description: `Opened red flag during day and handheld red or white light during the night or three short blows of hand horn. Stop! Passing is forbidden. If used by station master: signalizes a train to make an unscheduled stop on the station`,
  },
  {
    id: 5,
    sign: 'Continue Driving Forward',
    description: `Opened yellow flag during day and handheld white light during the night or long blow of hand horn`,
  },
  {
    id: 6,
    sign: 'Continue Driving Backward',
    description: `Opened yellow flag during day and handheld white light during the night or two long blows of hand horn`,
  },
  {
    id: 7,
    sign: 'Slow Down',
    description: `Opened yellow flag during day and handheld white light during the night or two short blows of hand horn`,
  },
  {
    id: 8,
    sign: 'Start Braking',
    description: `Hand during day and handheld white light during the night. Driver answers this signal with one short whistle and starts breaking`,
  },
  {
    id: 9,
    sign: 'Stop Braking',
    description: `Hand during day and handheld white light during the night. Driver answers this signal with two short whistles and stops breaking`,
  },
  {
    id: 10,
    sign: 'Drop Pantograph (Hand Signal)',
    description:
      'During day: hand closer to track does horisontal movements other one is raised straight up. During night - horisontal and vertical movements with handheld signal. Used by track electrician when they suddenly found catenary damage. Driver should answer with horn and drop pantograph, then, continue through damaged place with extra care. After driver made sure that train passed damaged catenary they can raise pantograph and continue as usual.',
  },
  {
    id: 11,
    sign: 'Rail Switch Straight',
    description: 'Upon passing rail switch train will go straight',
  },
  {
    id: 12,
    sign: 'Rail Switch Divert',
    description:
      'Upon passing rail switch train will divert onto the branch track',
  },
  {
    id: 13,
    sign: 'Slip Rail Switch Is In Direct Position',
    description:
      'First pair is shown during a day and other one - during the night. Upon passing rail switch train will go on direct track',
  },
  {
    id: 14,
    sign: 'Slip Rail Switch Is In Across Direct Position',
    description:
      'First pair is shown during a day and other one - during the night. Upon passing rail switch train from other track will go across direct track',
  },
  {
    id: 15,
    sign: 'Slip Rail Switch Is In From Direct Track To Branch One Position',
    description:
      'First pair is shown during a day and other one - during the night. Upon passing rail switch train will divert onto the branch track',
  },
  {
    id: 16,
    sign: 'Slip Rail Switch Is In From Branch Track To Direct One Position',
    description:
      'First pair is shown during a day and other one - during the night. Upon passing rail switch train from other track will divert onto direct track',
  },
  {
    id: 17,
    sign: 'Intentional Track Obstruction',
    description:
      'If track is obstructed white circle or light (during the night time only) with horisontal black line on the middle is shown. If track is not obstructed - same signage but with vertical black line on the middle.',
  },
  {
    id: 18,
    sign: 'Railroad water tower sign',
    description: `During the day rotating part's position is seen. During the night if rotating part is obstructing way - red light is shown both ways, otherwise - white one.`,
  },
  {
    id: 19,
    sign: 'Slow Down. Permanent Signal',
    description: `Yellow circle. Clear to pass while slowing down. Be ready to pass dangerous place, that is marked by "[start|end] of dangerous place" signs.
      Green circle. Train passed dangerous place`,
  },
  {
    id: 20,
    sign: 'Slow Down. Temporary Signal',
    description: `Yellow square. Clear to pass. Be ready to slow down and stop for dangerous place ahead.
      Green square. Train passed dangerous place and can speed up to the maximal authorized speed after passing of this sign with the last car`,
  },
  {
    id: 21,
    sign: 'Dangerous Place Boundaries',
    description: `Start Of Dangerous Place (left). End Of Dangerous Place (right)`,
  },
  {
    id: 22,
    sign: 'Stop',
    description: `Red rectangle is used during daytime and red light during nighttime. Stop! Passing is forbidden`,
  },
  {
    id: 23,
    sign: 'Sound The Horn',
    description: `Permanently installed before tunnels, bridges, rail crossings. Temporarily installed before dangerous places where train is not required to slow down or stop, but have to notify maintenance crew of approaching`,
  },
  {
    id: 24,
    sign: 'Hot axle box detector',
    description: `Installed in places where train axles condition is controlled automatically. This sign has no meaning while it is turned off. If signal is turned on it means some axles are overheating and in this case driver should use service brake and slow down to 20 km/h (~12 mph). Proceed with extra care watching train condition [and be ready to stop immediately in case of emergency]. Approach station switch with speed limit of 15 km/h (~9 mph). If there is no special instructions received - stop train on receiving track of the station, regardless of [route/exit] signal aspect`,
  },
  {
    id: 25,
    sign: 'Block Border. Locomotive signalling is primary',
    description: `Signalizes block border in zones where locomotive signalling is used as primary one`,
  },
  {
    id: 26,
    sign: 'Block Border. Locomotive signalling is primary only on wrong way track',
    description: `Signalizes block border in zones where locomotive signalling is used on wrong way tracks`,
  },
  {
    id: 27,
    sign: 'Drop Pantograph',
    description: `Temporarily installed in case of catenary maintenance. Permanently installed in direct current zone, before neutral section, where train is not allowed to proceed with raised pantograph in case of section blackout. If signal is turned off it doesn't care any meaning. If signal is flickering driver should drop pantograph to pass neutral section`,
  },
  {
    id: 28,
    sign: 'Attention! Neutral Section',
    description: `Installed in places where "Drop Pantograph" sign is used, just before neutral section`,
  },
  {
    id: 29,
    sign: 'Raise Pantograph',
    description: `Installed in places where "Drop Pantograph" sign is used, after neutral section. Singled sign is for locomotive and doubled sign is for multiple unit`,
  },
  {
    id: 30,
    sign: 'Turn Off Current',
    description: `Installed before neutral section`,
  },
  {
    id: 31,
    sign: 'Turn On Current',
    description: `Installed after neutral section. Singled sign is for locomotive and doubled sign is for multiple unit`,
  },
  {
    id: 32,
    sign: 'Neutral Section',
    description: `These signs denote start (bigger) and end (smaller) of neutral section`,
  },
  {
    id: 33,
    sign: 'Oil Gas Karst',
    description: `These signs denote places where railway track crosses oil or gas pipes or karst zones. Driver should proceed with extra care`,
  },
  {
    id: 34,
    sign: 'Automatic brakes check',
    description: `Denote zone where driver can test their automatic brakes. Start braking (left), end braking (right)`,
  },
  {
    id: 35,
    sign: 'Boundary poles',
    description: `Denote point beyond which rolling stock should not be placed because of upcoming rail switch or diamond crossing. Left one is for main track and right one is for branch tracks`,
  },
  {
    id: 36,
    sign: 'Boundary signs',
    description: `Left - station boundary. Right - industrial spur boundary.`,
  },
  {
    id: 37,
    sign: 'Stop Here signs',
    description: `Installed at the end of the platform. Left - stop locomotive here. Right - stop first car of multiple unit here.`,
  },
  {
    id: 38,
    sign: 'Catenary signs',
    description: `Readings from left to right. Changing to branch catenary (means current is supplied by private company). Change to central catenary (means current is suplied by government company). End of catenary`,
  },
  {
    id: 39,
    sign: 'Snow Plow signs',
    description: `Readings from left to right. [Used when high speed plow train is used] Prepare to raise knife and close wings. [Before obstruction] Raise knife and close wings. Same meaning, but installed before multiple obstructions, where plowing is not possible in between them. Drop knife and open wings`,
  },
  {
    id: 40,
    sign: 'Biohazard',
    description: `Denotes biohazard zone. From left to right appearance at the front, from the side and from behind. During the night sign is enlitten. Driver should sound special 'Chemical alarm' or 'Radiation alarm' signal and proceed with authorized speed.`,
  },
];
