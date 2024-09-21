module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'react/jsx-no-undef': 'off',
  },
};
