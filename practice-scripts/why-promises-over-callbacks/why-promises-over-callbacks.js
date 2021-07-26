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

const firstFunction1 = () => {
  console.log('1st function executed');
  return new Promise((resolve, reject) => {
    resolve(1);
  })
};

const secondFunction1 = () => {
  console.log('2nd function executed');
  return new Promise((resolve, reject) => {
    resolve(2);
  })
};

const thirdFunction1 = () => {
  console.log('3rd function executed');
  return new Promise((resolve, reject) => {
    resolve(3);
  })
};

const fourthFunction1 = () => {
  console.log('4th function executed');
  return new Promise((resolve, reject) => {
    resolve(4);
  })
};

const fifthFunction1 = () => {
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

firstFunction1()
  .then(res => secondFunction1())
  .then(res => thirdFunction1())
  .then(res => fourthFunction1())
  .then(res => fifthFunction1())
  .catch(err => console.log(err))

// async/await
console.log('<==================> using async/await <==================>');

const executeAll = async () => {
  try {
    await firstFunction1();
    await secondFunction1();
    await thirdFunction1();
    await fourthFunction1();
    await fifthFunction1();
    console.log('finished...');
  } catch (error) {
    console.log(error);
  }
}

executeAll();

// Lets take an exampe of Order Management flow

const getUserInfo = (userId, isReadyForGettingProductQuantity) => {
  const userInfo = {
    userId: userId,
    name: 'Pradeep Kolapkar',
  };
  isReadyForGettingProductQuantity(userInfo);
}

const getProductQuantity = (prouctId, isReadyForPayment) => {
  const prouctInfo = {
    prouctId,
    prouctInfo: 'iPhone XR',
    quantity: 1,
    color: 'black'
  };
  isReadyForPayment(prouctInfo);
}

const processPayment = (orderInfo, isReadyForShipment) => {
  const paymentInfo = {
    price: 100000
  }
  isReadyForShipment(paymentInfo);
}

const shipment = (finalOrderInfo, shipTo) => {
  const shipmentInfo = {
    pincode: 414204,
    city: 'Pune',
    street: 'MG Road'
  }
  shipTo(shipmentInfo);
}

const userId = 111111;
getUserInfo(userId, userInfo => {
  const prouctId = 222222;
  getProductQuantity(prouctId, (prouctInfo) => {
    const orderInfo = { ...userInfo, ...prouctInfo }
    processPayment(orderInfo, (paymentInfo) => {
      const finalOrderInfo = { ...orderInfo, ...paymentInfo };
      shipment(finalOrderInfo, (shipmentInfo) => {
        const finalOrderDetails = { ...finalOrderInfo, ...shipmentInfo }
        console.log('shipmentInfo', finalOrderDetails);
      });
    });
  });
});

console.log('<==================> using Promise <==================>');

const getUserInfo = (userId) => {
  return new Promise((resolve, reject) => {
    const userInfo = {
      userId: userId,
      name: 'Pradeep Kolapkar',
    };
    resolve(userInfo);
  })
}

const getProductQuantity = (prouctId) => {
  return new Promise((resolve, reject) => {
    const prouctInfo = {
      prouctId,
      prouctInfo: 'iPhone XR',
      quantity: 1,
      color: 'black'
    };
    resolve(prouctInfo);
  });
}

const processPayment = (orderInfo) => {
  return new Promise((resolve, reject) => { 
    const paymentInfo = {
      price: 100000
    }
    resolve(paymentInfo);
  })
}

const shipment = (finalOrderInfo) => {
  return new Promise((resolve, reject) => { 
    const shipmentInfo = {
      pincode: 414204,
      city: 'Pune',
      street: 'MG Road'
    }
    resolve(shipmentInfo);
  });
}

const userId = 111111;
const processOrder = (userId) => {
  let userInfo;
  let orderInfo;
  let finalOrderInfo;
  getUserInfo(userId)
    .then(userInfo => {
      userInfo = userInfo;
      const prouctId = 222222;
      return getProductQuantity(prouctId)
    }).then(prouctInfo => {
      orderInfo = { ...userInfo, ...prouctInfo }
      return processPayment(orderInfo);
    }).then(paymentInfo => {
      finalOrderInfo = { ...orderInfo, ...paymentInfo };
      return shipment(finalOrderInfo);
    }).then(shipmentInfo => {
      const finalOrderDetails = { ...finalOrderInfo, ...shipmentInfo }
      console.log('shipmentInfo', finalOrderDetails);
    });
}

processOrder(userId);

console.log('<==================> using Async/Await <==================>');

const userId = 111111;
const prouctId = 222222;
const processOrder = async (userId) => {
  const userInfo = await getUserInfo(userId);
  const prouctInfo = await getProductQuantity(prouctId);
  const orderInfo = { ...userInfo, ...prouctInfo }
  const paymentInfo = await processPayment(orderInfo);
  const finalOrderInfo = { ...orderInfo, ...paymentInfo };
  const shipmentInfo = shipment(finalOrderInfo);
  const finalOrderDetails = { ...finalOrderInfo, ...shipmentInfo }
  console.log('shipmentInfo', finalOrderDetails);
}
processOrder(userId);