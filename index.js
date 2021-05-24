const char = require('./char.json');
const number = require('./number.js');
const evaluate = require("./evaluate.js");

module.exports = function (string) {

    string = string.split('');

    for (let i = 0; i < string.length; i++) {

        let letter = char[string[i]];

        if (letter) {
            string[i] = letter[Math.floor(Math.random() * letter.length)]
        } else {
            string[i] = `'${string[i]}'`;
        }

        string[i] = string[i]
            .replace(/{{number\((.*)\)}}/gm, number)
            .replace(/\$\{(.*)\}/gm, evaluate);
    }

    return string.join('+');
}

console.log(module.exports("b"))