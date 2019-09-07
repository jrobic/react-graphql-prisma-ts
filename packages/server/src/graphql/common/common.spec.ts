// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { createServer, ServerTest } from "../../tests/common";
import { App } from "../../types/Server";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require("../../../package.json");

const versionQuery = /* GraphQL */ `
  query versionQuery {
    version {
      name
      version
    }
  }
`;
// --------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------
describe("> Common", () => {
  let server: ServerTest;
  let app: App;

  beforeAll(async () => {
    ({ server, app } = await createServer());
  });

  afterAll(async () => {
    await app.close();
  });

  test("should return api version", async () => {
    await server
      .sendQL(versionQuery)
      .expect(({ body }: request.Response) => {
        expect(body.data.version.name).toEqual(packageJSON.name);
        expect(body.data.version.version).toEqual(packageJSON.version);
      })
      .expect(200);
  });
});
