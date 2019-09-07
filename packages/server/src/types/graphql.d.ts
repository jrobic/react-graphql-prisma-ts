declare module "*.graphql" {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { DocumentNode } from "graphql";

  const Schema: DocumentNode;

  export = Schema;
}
