module.exports = {
  env: {
    es6: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-empty-function': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
    'no-console': 'error',
    'global-require': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'object-curly-newline': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
