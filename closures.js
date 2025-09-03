//  Nested Function

// const displayName = (name) => {
//   const greet = () => console.log(`Hi ${name}!`);
//   greet();
// };

// CLosures

// const displayName = (name) => {
//   let nm = name;
//   let age = 10;
//   const greet = () => console.log(`Hi ${nm} & i am ${age} years old!`);
//   return greet;
// };

// const fn = displayName("Ahmed");
// fn();

const outerFn = () => {
  let counter = 0;
  const innerFn = () => {
    counter++;
    console.log(counter);
  };
  return innerFn;
};

const fn = outerFn();
fn();
fn();
fn();
fn();
