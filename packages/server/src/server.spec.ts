import { createServer, ServerTest } from "./tests/common";
import { App } from "./types/Server";

describe("> Server", () => {
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
      .get("/version")
      .expect(({ body }: any) => {
        expect(body.name).toBeDefined();
        expect(body.version).toBeDefined();
      })
      .expect(200);
  });
});
