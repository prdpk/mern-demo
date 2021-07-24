var fs = require('fs');

const path = './test-folder/';

const isFile = file => {
  const prefix = fs.lstatSync(`${path}${file}`).isFile() ? '*' : '+'; 
  console.log(`${prefix} ${file}`);
}

fs.readdir(path, (err, files) => files.map(isFile));