const firstFunction = () => {
  console.log('1st function executed');
  return new Promise((resolve, reject) => {
    resolve(1);
  })
};

const secondFunction = () => {
  console.log('2nd function executed');
  return new Promise((resolve, reject) => {
    resolve(2);
  })
};

const thirdFunction = () => {
  console.log('3rd function executed');
  return new Promise((resolve, reject) => {
    resolve(3);
  })
};

const fourthFunction = () => {
  console.log('4th function executed');
  return new Promise((resolve, reject) => {
    resolve(4);
  })
};

const fifthFunction = () => {
  console.log('5th function executed');
  return new Promise((resolve, reject) => {
    resolve(5);
  })
};

// To avoid the above callback hell problem, The Promise feature is introduced in Javascript.
// Refactor the above mentioned callback hell approach using Promise.
// Implement Promise chaining using then() function to handle the asynchronous operations sequentially.
// Here the error handling is controlled using single catch block.
// Promising chaining is implemented to handle async operation sequentially.

firstFunction()
  .then(res => secondFunction())
  .then(res => thirdFunction())
  .then(res => fourthFunction())
  .then(res => fifthFunction())
  .catch(err => console.log(err))