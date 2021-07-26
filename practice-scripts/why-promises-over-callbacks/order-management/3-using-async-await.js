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