### generic type syntax

```js
const myVar = GenericTypes<type1, type2,...>
```

### arrays generic types

In this case, we can pass the type we want the array elements to be

example:

```js
let scores: Array<number> = [70, 65, 75];
```

### Promise -> ReturnType

We can use Promise generic type to specify the return type of async code. Also, to strongly-type what is returned from a `fetch` function.

```js
const response: Promise<Response> = fetch(url);
response.then((res) => console.log(res.ok));
```

### Readonly -> Type

We can use the `Readonly` generic type to make a type to be immutable
example:

```js
type Action = {
  type: "fetchedName",
  data: string,
};

type ImmutableAction = Readonly<Action>;
```

### Partial -> Type

It is like to set all members of a type as optional
example:

```js
//Partial<type>
type Contact = {
  name: "Grazi",
  age: 23,
};
// same thing
type Contact = {
  name?: "Grazi",
  age?: 23,
};
```

## generic functions

About generic functions, we can imagine a situation that we typed our function to receive an array of strings, like this:

```js
function firstOrNull(array: string[]): string | null {
  return array.length === 0 ? null : array[0];
}
```

but... what if we need to do the same thing for an array of numbers?

In this case, we can use a generic functions to solve this problem.

### generic functions syntax

```js
function someFunc<T1, T2, ...>(){
  ...
}
```

We will often see names like `T` and `S` for type parameters in typescript

* T (for "T"ype)
* S (for "S"ate)
* E (for "E"lement)
* K (for "K"ey)
* V (for "V"alue)

Now is time to convert our firstOrNull function into generic typed funciton

```js
function firstOrNull<ItemTypes>(array: ItemTypes[]): ItemTypes | null {
  return array.length === 0 ? null : array[2];
}

console.log(firstOrNull<string>(["Rod", "Jane", "Fred"])); // Fred
console.log(firstOrNull<number>([1, 2, 3])); // 3
```
what if we don't put the generic type in the function caller?
`firstOrNull(["Rod", "Jane", "Fred"])`

typescript will infer that is a array of strings
 `string | null`
### generic arrow functions

there is a little problem with firstOrNull function when we transform this into arrow function

```js
const firstOrNull = <ItemType, T>(
  array: ItemType[]
): ItemType | null =>
  array.length === 0 ? null : array[0];
```

the compiler will throw an error because it thinks the generic parameter is a React element

to solve this 👇:

```js
const firstOrNull = <ItemType,>(
  array: ItemType[]
): ItemType | null =>
  array.length === 0 ? null : array[0];

```

yeah, just put a comma 😂

## Generic interfaces

below we have a simple generic form interface:

```js
interface Form<T> {
  values: T;
}

interface Contact {
  name: string;
  email: string;
}

```
here is how we can strongly type the `contactForm` variable

```js
const contactForm: Form<Contact> = {
  values: {
    name: "Grazi",
    email: "grazi@someemail.com"
  }
}
```

