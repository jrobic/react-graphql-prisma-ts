// eslint-disable-next-line import/no-extraneous-dependencies
import fg from "fast-glob";
import { copyFileSync } from "fs";

async function main(): Promise<void> {
  const entries = await fg("./src/**/*.graphql");

  entries.forEach(entry => {
    const outputFile = entry.replace("./src", "./dist");

    copyFileSync(entry, outputFile);
  });
}

main();
