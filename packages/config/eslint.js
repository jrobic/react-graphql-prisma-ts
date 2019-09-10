module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      // TypeScript config
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier/react',
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
          },
        },
      },
      rules: {
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // Disable some rules in unit tests.
      files: ['test/**/*.ts', 'test/**/*.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
      },
    },
  ],
};
