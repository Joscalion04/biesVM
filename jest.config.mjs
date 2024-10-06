export default {
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'mjs', 'json', 'node'],
  verbose: true,
};