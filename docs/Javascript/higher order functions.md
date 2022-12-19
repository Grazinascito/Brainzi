### map

the map method has the ability to return a modified array:

```js
const numbers = [1, 2, 3, 4];

const squared = numbers.map(x => x * x);

console.log(squared);  // [1, 4, 9, 16]

``` 

### filter

the filter method has the ability to selects elements from an array based on a condition and returns a new array with this conditions

example:

```js
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(x => x % 2 === 0);

console.log(even);  // [2, 4, 6]
```

### reduce

the reduce method has the ability to accumulating a result and returning the final result

```js
const numbers = [0, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum)
// sum is now 10
```