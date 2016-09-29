const noGenerator = require('./dist').generate;

// without options
console.log(noGenerator());

// with options
console.log(noGenerator({
  length: 10,
}));
