## The immutability principle

immutability principle refers to the idea that once a component's state has been set, it should not be directly modified

with that in mind, we can use the spread operator to make an copy of an object

### lets see 2 examples:

break the immutability principle: ❌

```js
const user = {
  firstName: "Grazi",
  lastName: "Suco",
  age: 23,
  active: false,
};

Object.assign(user, { active: true }); // modifying the original object
```

right way: ✅

```js
const userClone = {
  ...user, //spread operator
  active: true,
};
```
