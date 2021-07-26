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