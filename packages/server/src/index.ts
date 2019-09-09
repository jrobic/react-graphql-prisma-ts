/* istanbul ignore file */
import startServer from "./server";

startServer(({ port }: { port: number }) =>
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`)
);
