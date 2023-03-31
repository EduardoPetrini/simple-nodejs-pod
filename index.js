import { setTimeout } from "timers/promises";

const start = async () => {
  let count = 0;

  while (count < 20) {
    count++;

    console.log(`Processing something: ${count}`);

    await setTimeout(2000);
  }

  return "Done";
};

start().then(console.log).catch(console.error);
