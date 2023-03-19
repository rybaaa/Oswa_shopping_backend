module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['import'],
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
  },
};
