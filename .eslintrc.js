module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
