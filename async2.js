// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
const { add, subtract, multiply } = require("./async1");
// Async Await

const init = async () => {
  try {
    const addRes = await add(10, 20);
    const subRes = await subtract(addRes, 2);
    const mulRes = await multiply(subRes, 2);
    console.log(mulRes);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("ASYNC COMPLETED");
  }
};

init();
console.log("Hello World");
