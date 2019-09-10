// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("@react-graphql-prisma-ts/config/jest.config");

module.exports = {
  ...config,
  setupFiles: [
    "<rootDir>/config/jest/setup.ts",
    "<rootDir>/config/jest/mocks.ts"
  ]
};
