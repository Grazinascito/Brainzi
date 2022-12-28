Spread operator is a very useful tool
An example is that we can use it to create a simple copy of an array

```js
const users = ["Manuel", "Chris", "Ben"];
const selectedUsers = [...users];
```

if we change the `users` array, no complications for original array occur

another example:

```js
const greenFruits = ["kiwi", "apple", "pear"];
const redFruits = ["strawberry", "cherry", "raspberry"];
const allFruits = [...greenFruits, ...redFruits];

console.log(allFruits); //[ 'kiwi', 'apple', 'pear', 'strawberry', 'cherry', 'raspberry' ]
```
