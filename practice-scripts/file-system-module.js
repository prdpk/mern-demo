const fs = require('fs');

const errorHandler = (err, dt) => {
    if (err) throw err
    console.log('asynchronous operation', dt);
}

fs.readFile(`./content/my.txt`, 'utf8', errorHandler);

// synchronous operation.
const dt = fs.readFileSync('./content/my.txt', 'utf8');
console.log('synchronous operation', dt);


console.log('=======+++>');

fs.writeFile('./content/my.txt', 'this written from code', { flag: 'a+' }, errorHandler)
fs.appendFile('./content/my.txt', 'this is from append file', errorHandler)

// fs.mkdir('./content/timing', errorHandler);