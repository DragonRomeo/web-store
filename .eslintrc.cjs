module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  plugins: ['import', '@typescript-eslint'],
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'global-require': 'off',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'no-shadow': 'error',
    'no-plusplus': 'off',
    'no-nested-ternary': 'error',
    'no-underscore-dangle': 'error',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',

    // Copy-paste of what AirBnB has with removed ForOfStatement
    // We can use it in our code because we do not need IE11 support, and all modern major browsers support iterators OOTB
    // https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L339
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'import/extensions': 'off',
    'import/newline-after-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    'no-bitwise': 'off',
    'no-continue': 'off',

    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-props-no-spreading': 'off',
    // this rule is buggy in false-positive manner
    'react/no-unused-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Input', 'HiddenInput'],
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'consistent-return': 'off',

    // TODO: Should we fix errors or disable the rule?
    'prefer-destructuring': 'error',
    // this is buggy rule
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
  },
  overrides: [
    {
      files: ['index.ts', 'index.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // eslint-plugin-import: Handled by TypeScript
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',

        // eslint-plugin-import: Disabled locally but is recommended for CI
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
        'import/no-named-as-default': 'off',
        'import/no-cycle': 'off',
        'import/no-unused-modules': 'off',
        'import/no-deprecated': 'off',

        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],

        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              object: false,
            },
          },
        ],

        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        // TODO: Should we fix errors or disable the rule?
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
      },
    },
    {
      files: ['*.oldstories.tsx', '*.oldstories.jsx', '*.stories.tsx', '*.stories.jsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*_spec.ts'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
    {
      files: ['*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.element.ts'],
      extends: ['plugin:lit/recommended'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowedNames: ['render', 'attributeChangedCallback', 'disconnectedCallback', 'connectedCallback'],
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
