module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/generated',
    '!src/tests',
    '!src/**/*.d.ts',
  ],
  coveragePathIgnorePatterns: ['__mocks__'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'json-summary'],
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test|e2e).ts?(x)'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.js$',
    '[/\\\\]node_modules[/\\\\].+\\.ts$',
  ],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.(ts)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
