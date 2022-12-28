### Static object methods

### Oject.assign

this is the most useful method because it enables merging one or more objects into an existing object and returns the results as an object.

```js
const user = { id: 1, name: "Manuel" };
const modifiedUser = Object.assign(user, { role: "Admin" });

console.log(user); //{ id: 1, name: 'Manuel', role: 'Admin' }

console.log(modifiedUser); //{ id: 1, name: 'Manuel', role: 'Admin' }

console.log(user === modifiedUser); //true
```

If we observe the consoles, we will see that this method modified the original object, violating the immutability rule and pure functions.

In react projects, we need to avoid this mutations. To solve this problema we can put the `{}` as the first parameter of the method

```js
const user = { id: 1, name: "Manuel" };
const modifiedUser = Object.assign({}, user, { role: "Admin" });

console.log(user === modifiedUser); //false
```

another example of object.assign:

```js
const user = { id: 1, name: "Manuel" };
const modifiedUser = Object.assign(
  {},
  user,
  { role: "Admin" },
  { name: "Not Manuel", job: "Developer" }
);

console.log(modifiedUser);
```

and... another one:

```js
const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };
console.log(Object.assign(a, b, c)); //{ a: 1, b: 2, c: 3 }
```

### Object.entries(Objects)

The object entries returns the entries as an array

```js
Object.entries({ id: 1, name: "Grazi" }); // [["id", 1], ["name", "Grazi"]]
````

### Object.keys

The objects Keys returns the key's properties as an array

```js
Object.entries({ id: 1, name: "Grazi" }); // ["id", "name"]
```

### Object.values

The objects values returns the value's properties as an array

```js
Object.entries({ id: 1, name: "Grazi" }); // [1, "Grazi"]
```
