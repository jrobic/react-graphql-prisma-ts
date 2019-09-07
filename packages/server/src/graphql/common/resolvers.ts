import { MyContext } from "../../types/Context";
import { ApiVersion, name, version } from "../../utils/version";

interface StatusResponse {
  prisma: "ok" | "nok";
}

export default {
  Query: {
    version(): ApiVersion {
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
