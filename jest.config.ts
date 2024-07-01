export default {
  testMatch: ['**/spec/**.spec.ts'],
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  roots: [],
  testTimeout: 200000,
};
