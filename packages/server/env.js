// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const NODE_ENV = process.env.NODE_ENV || "development";

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  ".env",
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== "test" && `.env.local`
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    // eslint-disable-next-line
    require('dotenv-expand')(
      // eslint-disable-next-line
      require('dotenv-safe').config({
        allowEmptyValues: true,
        path: dotenvFile
      })
    );
  }
});
