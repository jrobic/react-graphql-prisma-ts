/* istanbul ignore file */
import startServer from "./server";

startServer(({ port }: { port: number }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
