module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'lf',
  // this is pnpm issue.
  // see https://github.com/prettier/prettier/issues/8056
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    'polyfills',
    '<THIRD_PARTY_MODULES>',
    '^~core/(.*)(?<!s?css)$',
    '^~features/(.*)(?<!s?css)$',
    '^~pages/(.*)(?<!s?css)$',
    '^\\.\\.(.*)$(?<!s?css)$',
    '^\\.(.*)$(?<!s?css)$',
    '^\\.\\..*s?css$',
    '^\\./.*s?css$',
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ['jsx', 'typescript'],
};
