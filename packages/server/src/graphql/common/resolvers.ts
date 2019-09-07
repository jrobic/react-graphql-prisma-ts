import { MyContext } from "../../types/Context";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require("../../../package.json");

interface VersionResponse {
  name: string;
  version: string;
}

interface StatusResponse {
  prisma: "ok" | "nok";
}

export default {
  Query: {
    version(): VersionResponse {
      return {
        name,
        version
      };
    },

    async status<Root, Args>(
      _root: Root,
      _args: Args,
      context: MyContext
    ): Promise<StatusResponse> {
      const user = await context.prisma.$exists.user({
        email: "admin@admin.fr"
      });

      return { prisma: user !== undefined ? "ok" : "nok" };
    }
  }
};
