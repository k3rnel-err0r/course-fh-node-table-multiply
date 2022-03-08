const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'Base number for multiplication table',
            type: 'number'
        },
        'l': {
            alias: 'list',
            demandOption: false,
            describe: 'List the multiplication table',
            default: false,
            type: 'boolean'
        },
        'h': {
            alias: 'hasta',
            default: 10,
            describe: 'Table until...',
            type: 'number'
        }
    })
    .check((argv, options) => {
        if ( isNaN(argv.b)) {
            throw 'Base must be a number';
        }
        if ( isNaN(argv.h)) {
            throw 'Hasta must be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;