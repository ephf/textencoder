module.exports = function(string) {
    string = string.split('');
    for(let i = 0; i < string.length; i++) {
        let letter = require('./char.json')[string[i]];
        if(letter) {
            string[i] = eval(`\`${letter[Math.floor(Math.random() * letter.length)]}\``);
        } else {
            string[i] = `'${string[i]}'`;
        }
    }
    return string.join('+');
}