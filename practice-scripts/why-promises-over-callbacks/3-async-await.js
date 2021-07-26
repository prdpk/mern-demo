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

const executeAll = async () => {
  try {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
    await fourthFunction();
    await fifthFunction();
    console.log('finished...');
  } catch (error) {
    console.log(error);
  }
}

executeAll();