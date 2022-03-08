const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(argv);
// const multiplier = 7;

// const [, , arg3 = 'multiplier=5'] = process.argv;
// const [, multiplier = 5] = arg3.split('=');
// console.log(multiplier);

// createFile( multiplier)
createFile( argv.b, argv.l, argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));