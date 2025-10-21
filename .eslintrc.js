module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react-native/no-inline-styles': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react-native/sort-styles': 'off',
    'react-native/no-raw-text': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'always',
      },
    ],
    'react/prop-types': 'off',
  },
  settings: { react: { version: 'detect' } },
}
