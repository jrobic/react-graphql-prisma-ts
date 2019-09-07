// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require("../../package.json");

export interface ApiVersion {
  name: string;
  version: string;
}

export { name, version };
