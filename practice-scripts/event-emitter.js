const EventEmitter = require('events');

const em = new EventEmitter();

em.on(`invoices`, obj => {
  console.log('hi');
  console.log(obj);
});

em.emit('invoices', { inbNum: '1112-02-2021', invAmt: 1000 });


// <========== using promise event ==========>


em.on(`invoices-promise`, obj => {
  obj.then(invoice => {
    console.log('invoice', invoice);
  });
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ inbNum: '1112-02-2021', invAmt: 1000 })
  }, 5000)
})

em.emit(`invoices-promise`, promise);