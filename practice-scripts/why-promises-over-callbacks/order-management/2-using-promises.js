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
