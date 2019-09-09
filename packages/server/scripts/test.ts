// eslint-disable-next-line import/no-extraneous-dependencies
import jest from "jest";
import { execSync } from "child_process";

require("../config/env");

const argv = process.argv.slice(2);
argv.push("--config=jest.config.js");
argv.push("--env=node");
argv.push("--runInBand");

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

// Ensure environment variables are read.

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

function isInGitRepository(): boolean {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}

// Watch unless on CI, in coverage mode, or explicitly running all tests
if (
  !process.env.CI &&
  argv.indexOf("--coverage") === -1 &&
  argv.indexOf("--watchAll") === -1
) {
  // https://github.com/facebook/create-react-app/issues/5210
  const hasSourceControl = isInGitRepository();
  argv.push(hasSourceControl ? "--watch" : "--watchAll");
}

argv.push("--detectOpenHandles");
argv.push("--logHeapUsage");

jest.run(argv);
