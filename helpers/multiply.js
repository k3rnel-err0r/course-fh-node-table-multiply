const { builtinModules } = require("module");
const fs = require('fs');
const colors = require("colors");

const createFile = async (multiplier = 5, list, hasta) => {

    try {
        let output = '';
        let terminal = '';

        for (let i = 1; i <= hasta; i++) {
            output +=  `${ multiplier } x ${ i } = ${ multiplier * i }\n`;
            terminal +=  colors.rainbow(`${ multiplier } x ${ i } = ${ multiplier * i }\n`);
        }

        list && console.log(terminal);

        fs.writeFileSync(`output/table-${ multiplier }.txt`, output);
        return colors.green(`table-${ multiplier }.txt file created`);

    } catch (err) {
        throw err;
    }
}

module.exports = { createFile };