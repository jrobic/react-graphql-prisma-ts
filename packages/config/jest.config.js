module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.ts", "!src/generated", "!src/tests"],
  coveragePathIgnorePatterns: ["__mocks__"],
  collectCoverage: true,
  coverageReporters: ["lcov", "json-summary"],
  setupFiles: [
    "<rootDir>/config/jest/setup.ts",
    "<rootDir>/config/jest/mocks.ts"
  ],
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test|e2e).ts"],
  testEnvironment: "node",
  testURL: "http://localhost",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.js$",
    "[/\\\\]node_modules[/\\\\].+\\.ts$"
  ],
  transform: {
    "^.+\\.(js)$": "babel-jest",
    "^.+\\.(ts)$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js", "json", "node"]
};
