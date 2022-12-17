---
sidebar_position: 2
---

# creating types

## Arrays

### Arrays mixed types

by default arrays are mixed if we not infer the type 👇

```js
const items = []; //any
items.push(1);
items.push("two"), items.push(false);

console.log(items);
```

to infer the type of our array we will do something like this:

```js
const numbers: Array<number> = [];
```

### bracket notation

```js
const itemsNumber: number[] = [];

const itemsText: string[] = ["one", "two", "three"];
```

### type inference

we can use the concept of [type inference](http://localhost:3000/Typescript%20with%20React/type%20annotations#type-inference) for this code too

```js
const strings2 = ["one", "two", "three"]; //string[]
```

see more: [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html#array)

## type tuple

A tuple is like an array with fixed number of elements. Some of react hooks return a tuple. ex: `useState`:

```js
const [state, setState] = useState(initialState);
```

tuple of useState: `[state, setState]`

`useReduce` ex:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

\*obs: type tuple doesn't exist in `javascript`

more examples:

```js
["Grazi", 23];
[string, number];

//declaring a tuple variable:

const graziAge: [string, number] = ["Grazi", 23]; //(string | number)[] -> union types

const benScores: [string, ...number[]] = ["Ben", 50, 75, 85]
```

see more: [Typescript handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)

## type object

### inferred object types

```js
const tomScore = {
  name: "Tom",
  score: 70,
};
```

he type of tomScore is:

```js
{
name: string;
score: number;
}
```
### explicit object type

```js
const tomScore: { name: string, score: number } = {
  name: "Tom",
  score: 80,
};
```
## Type aliases

let's imagine if whanna type an object

```js
const tomScore: { name: string; score: number; } = { name: "Tom", score: 70 };
const bobScore: { name: string; score: number; } = { name: "Bob", score: 80 };
const janeScore: { name: string; score: number; } = { name: "Jane", score: 90 };
```
It is not the best way to do that, we can type our object in a cleaner way, like this:

```js
type Score = {
    name: string;
    score: number;
}

const tomScore: Score = { name: "Tom", score: 70 };
const bobScore: Score = { name: "Bob", score: 80 };
const janeScore: Score = { name: "Jane", score: 90 };
```

## Creating interfaces

```js
interface ButtonProps {
  text: string;
  onClick: () => void
}

const BuyButton: ButtonProps = {
  text: "Buy",
  onClick: () => console.log("Buy")
}
```
### Readonly properties
It is a way to ensure that object don't will be changed
```js
interface TypeName {
  readonly propertyName: PropertyType;
}

interface ButtonProps {
  readonly text: string;
  onClick?: () => void;
}
```
another example: 
```js
interface Point {
  readonly x: number;
  readonly y: number;
}
function createPoint(x: number, y: number): Point {
  return { x, y };
}
const p = createPoint(1, 2);
p.x = 3; // Error: Cannot assign to 'x' because it is a read-only property

```
### Extending interfaces

Interfaces can extend other so they will inherit all the properties and methods
from the first one

```js
interface ColoredButtonProps extends ButtonProps{
  color: string
}
```

now, we have created a interface with the same properties of the ButtonProps, but in our case, we have added a new propert to it: `color: string`

```js
interface ColoredButtonProps extends ButtonProps{
  color: string
}
const GreenBuyButton: ColoredButtonProps = {
  color: "Green",
  text: "Buy",
  onClick: () => console.log("Buy")
}
```

### Interface vs Types

there is not a main difference between interfaces and types, nowadays we can chose one of them to use

## union types

as the name suggests, union types are unions of types 😂
So, if we have the age variable and we wanna it to be number or null?
we can combine the number and null types:
```js
  let age: number | null;
  age = null;      // okay
  age = 30;        // okay
  age = "30";      // error
```
## intersection types

like union types, intersection types will combine existing types to form a new one, but in this case, intersection type will have all the members from the types it is based on

ex:
```js
type Name = {
    firstName: string;
    lastName: string;
}
type PhoneNumber = {
    landline: string;
    mobile: string;
}

type Contact = Name & PhoneNumber;

const fred: Contact =  {
    firstName: "Fred",
    lastName: "Smith",
    landline: "0116 4238978",
    mobile: "079543 4355435"
}
```

if we remove the propety mobile?

```js
 Property 'mobile' is missing in type '{ firstName: string; lastName: string; landline: string; }' but required in type 'PhoneNumber'.
 ```

 this error would not happen if we used union types as follow:

`type Contact = Name | PhoneNumber;`

