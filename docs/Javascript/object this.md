with an object this, we can acess properties of the object that the current function is a method of:

```js
const obj = {
  name: 'My object',
  sayName: function() {
    console.log(this.name);
  }
};
obj.sayName(); // Outputs 'My object'
```

