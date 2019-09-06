// eslint-disable-next-line import/prefer-default-export
export const sayHello2 = (name = "World"): void => {
  console.log(`Hello ${name}`);
};

sayHello2("Jonathan");
