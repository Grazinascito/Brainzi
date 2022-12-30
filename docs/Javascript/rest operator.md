We could say that rest operator "collects" the remaining elements from a destructuring operation and saves them to a variable

example:

```js
const Example = (first, second, third, ...rest) => {
    console.log('first:', first); //1
    console.log('second:', second); // 2
    console.log('third:', third); // 3
    console.log('rest:', rest); // [4, 5]
}

Example(1, 2, 3, 4, 5);
```
