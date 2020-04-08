# nodejs-unboxing

NodeJS Code Unboxing - Deep dive into `SHIT` to see what it is. :D

## Coding Style

- Spread syntax `{ ... obj }` or `[ ...array ]` [Docs - Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```
