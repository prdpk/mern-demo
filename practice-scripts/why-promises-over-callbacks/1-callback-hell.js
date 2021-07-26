// Callback is a FUNCTION that is passed as an argument to another function
// its execution is delayed until that function in which it is passed is EXECUTED.

const { userInfo } = require("os");

const firstFunction = (firstFunctionCallback) => firstFunctionCallback();

const secondFunction = (secondFunctionCallback) => secondFunctionCallback();

const thirdFunction = (thirdFunctionCallback) => thirdFunctionCallback();

const fourthFunction = (fourthFunctionCallback) => fourthFunctionCallback();

const fifthFunction = (fifthFunctionCallback) => fifthFunctionCallback();

// 1. let’s say we are passing a function as a parameter to firstFunction()
// 2. Now firstFunction will execute the `firstFunctionCallback()` which is nothing but the callback function(anonymous function) which we have passed as a parameter.
// 3. Then secondFunction() will be executed.
// 4. Now secondFunction() will execute the `secondFunctionCallback()` which is nothing but the callback function(anonymous function) which we have passed as a parameter.
// 5. Then thirdFunction() will be executed.
// and likewise it will work for executing the fourthFunction(), fifthFunction().

firstFunction(() => {
  console.log('1st callback executed');
  secondFunction(() => {
    console.log('2nd callback executed');
    thirdFunction(() => {
      console.log('3rd callback executed');
      fourthFunction(() => {
        console.log('4th callback executed');
        fifthFunction(() => {
          console.log('5th callback executed');
          console.log('finished...');
        });
      })
    });
  });
});

// Here we have a many nested callbacks inside a callback.
// it becomes difficult to read and pass callbacks.
// Callback functions are useful for short asynchronous operations about two to three nested callbacks but not for more.
// By nesting callbacks in such a way, we easily end up with errors, hard to read, and hard to maintain code
// This pattern is nothing but the CALLBACK HELL.
