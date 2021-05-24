module.exports = function (matched, target) {

     target = parseInt(target == "*" ? Math.random() * 100 : target);

     let rand = multiple = 0;

     while (rand * multiple !== target) {
          rand = Math.random() * (target / 4);
          multiple = target / rand;
     }

     multiple /= 2;

     return `(${rand} * (${multiple} * 2))`;
}