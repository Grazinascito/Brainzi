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
