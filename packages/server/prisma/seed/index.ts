import createUsers from "./users";

const NODE_ENV = process.env.NODE_ENV || "development";

async function main(): Promise<void> {
  let users = [];

  if (NODE_ENV === "development") {
    users = await createUsers();

    console.log(users.slice(0, 5).map(({ email }) => `${email}`));
  }

  // console.log('--------------------------------------------------------');
  // console.log('--------------------------------------------------------');
}

main();
