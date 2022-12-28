## arrow functions

An arrow function is a short way to define a function expression: 

```js
const add = (a, b) => a + b; //arrow function

function add = (a,b){
    return a + b  // normal function 
}
``` 
so, arrow functions can be used in many of the same places as normal function.
but here is some differences between them:

* 1 arrow function dont have their own `this` value. They inherit the `this` value of the sourrounding context
* 2 arrow functions dont have an `arguments` object. 
* 3 arrow functions cannot be used as constructors.

here are some examples: 


```js
// example 1
const obj = {
  name: 'My object',
  getName: () => {
    return this.name;
  }
};

console.log(obj.getName());  // undefined


//example 2

const sum = () => {
  return arguments[0] + arguments[1];
};

console.log(sum(1, 2));  // Uncaught ReferenceError: arguments is not defined

//example 3

const Person = (name) => {
  this.name = name;
};

const person = new Person('John');  // Uncaught TypeError: Person is not a constructor

``` 

So, arrow functions is very useful but has some limitions, expecially with the `this` keyword