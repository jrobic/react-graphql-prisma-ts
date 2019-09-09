// eslint-disable-next-line import/no-extraneous-dependencies
const fg = require("fast-glob");
const { copyFileSync } = require("fs");

async function main() {
  const entries = await fg("./src/**/*.graphql");

  entries.forEach(entry => {
    const outputFile = entry.replace("./src", "./dist");

    copyFileSync(entry, outputFile);
  });
}

main();
