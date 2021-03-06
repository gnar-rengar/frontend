module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/*'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!troublesome-dependency/.*)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
      isolatedModules: true,
    },
  },
  resolver: '<rootDir>/.jest/resolver.js',
};
