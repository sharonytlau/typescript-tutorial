type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
