import faker from "faker";
import times from "lodash/times";

import { prisma, User } from "../../src/generated/prisma-client";

faker.seed(2019);

const teamUsers = [{ email: "admin@admin.fr" }];

async function createUser(data?: any): Promise<User> {
  const user = {
    email: faker.internet.email().toLowerCase(),
    name: faker.name.firstName(),
    ...(data || {})
  };

  const userCreated = await prisma.upsertUser({
    where: { email: user.email },
    update: user,
    create: user
  });

  return userCreated;
}

export default function createUsers(): Promise<User[]> {
  return Promise.all([
    ...teamUsers.map(createUser),
    ...times(100, () => createUser())
  ]);
}
