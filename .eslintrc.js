module.exports = {
  plugins: ['@typescript-eslint'],
  extends: 'next/core-web-vitals',
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-console': [
      2,
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: './src/**/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '**/*.+(svg|png|jpg|jpeg|mp3|mp4|tiff|webp|gif)',
            group: 'sibling',
            position: 'after'
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
};
