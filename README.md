# How it works

```js
const encode = require('.');
encode('hello');
/* output:
new Promise(() => {}).catch.toString()[13]+(typeof [])[3]+(typeof true)[3]+false.toString()[2]+(typeof true)[1]
*/
```

```js
console.log(new Promise(() => {}).catch.toString()[13]+(typeof [])[3]+(typeof true)[3]+false.toString()[2]+(typeof true)[1]); // encoded
// output: 'hello'
```