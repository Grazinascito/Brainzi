

destructuring is a way to extract value from arrays or objects into distinct variables,
example:
```js
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;
console.log(first) // red
console.log(second) // green
console.log(third) // blue
``` 

example for objects:

```js
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const {name, age, city} = person;

console.log(name);  // John
console.log(age);  // 30
console.log(city);  // New York
```

## destructuring to assign default values:

```js
const colors = ['red'];

const [first, second='green', third='blue'] = colors;

console.log(first);  // red
console.log(second);  // green
console.log(third);  // blue
```

## unpeek nested objects:

```js
const person = {
  name: 'John',
  age: 30,
  details: {
    city: 'New York',
    country: 'United States'
  }
};

const {name, age, details: {city, country}} = person

console.log(name);  // John
console.log(age);  // 30
console.log(city);  // New York
console.log(country);  // United States

```

