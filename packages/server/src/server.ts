import * as path from "path";
import morgan from "morgan";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { GraphQLServer } from "graphql-yoga";
import { MyRequest, StartServerResponse } from "./types/Server";
import { MyContext } from "./types/Context";

// Routes
import handleVersion from "./routes/version";

require("./env");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { prisma } = require("./generated/prisma-client");

// Types
const typesArray = fileLoader(path.join(__dirname, "./graphql/**/*.graphql"));
const typesMerged = mergeTypes(typesArray, { all: true });
const resolvers = fileLoader(
  path.join(__dirname, "./graphql/**/resolvers.{ts,js}")
);

/* istanbul ignore next */
morgan.token("graphql", (req: MyRequest) => {
  const { operationName } = req.body || { operationName: null };

  if (operationName) {
    const regex = new RegExp(`(\\w*)[ ]*${operationName}`);
    const operationType = req.body.query.match(regex)[1];
    return `${operationType}:${operationName}`;
  }
  return "";
});

const startServer = async (cb?: Function): Promise<StartServerResponse> => {
  const PORT = process.env.NODE_ENV === "test" ? 0 : process.env.PORT || "4000";

  const server = new GraphQLServer({
    typeDefs: typesMerged,
    resolvers,
    middlewares: [],
    context: ({ request, response }): MyContext => {
      return {
        req: request,
        res: response,
        url:
          process.env.NODE_ENV === "test"
            ? ""
            : `${request.protocol}://${request.get("host")}`,
        prisma
      };
    }
  });

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== "test") {
    server.express.use(
      morgan(
        ":method :url :graphql :status :response-time ms - :res[content-length]",
        {
          skip: (req: MyRequest) => {
            const { operationName } = req.body || {
              operationName: null
            };

            if (operationName === "IntrospectionQuery") {
              return true;
            }
            return false;
          }
        }
      )
    );
  }

  server.express.get("/version", handleVersion);

  const app = await server.start({
    port: PORT,
    debug: process.env.NODE_ENV !== "production",
    tracing: true
  });

  if (cb) cb({ port: PORT });

  return {
    app,
    prisma
  };
};

export default startServer;
