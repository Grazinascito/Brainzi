type annotations are the very basic thing that we need to learn in typescript. It allow us to assign type to variables and the synta to do that es very easy, if you know the basics of data types in javascript, of course.

declaring a variable as a number:

```js
let score: number;
```

now, if we try to assign another data type to this variable, it will throw an error.

```js
let score: number;
score = 10;
score = "ten"; //string
```

the code above has a type error at line 3

## Assigning types to functions

Its very common manipulate types in functions

```js
function add(a: number, b: number): number {
  return a + b;
}
```

arrow functions:

```js
const multiply = (a: number, b: number): number => a * b;
```

optional parameter:
`?`is responsible to make the type optional, that is, we dont need to a parameter
but it will became a problem since our `b`is undefined

```js
function add(a: number, b?: number): number {
  return a + b;
}
add(3);
```

to solve this, we can use the logical OR operator `||`

```js
function add(a: number, b?: number): number {
  return a + (b || 0);
}
add(3);
```

\*obs
type annotations donest exist in javascript, so they are removed during the transpilation process

## Type inference

typescript will automatically infer an type in some cases

```js
let score = 10; //number
```

when we are using const our type will be the value. Ex:

```js
const age = 31; //31
```

obs: the example above is for a primitive type. However, when a constant is initialized from a non-primitive type. typescript infers it to beof the same type as assigned. ex:

```js
const first = "Bob";
const last = "Smith";
let fullName = first;
fullName += " ";
fullName += last;
```

### type inference with functions

typescript also infer the return type of a function

```js
function add(a: number, b: number) {
  return a + b;
}

const ten = add(5, 5); //number
```

\*obs: typescript breaks when no type annotations are defined on their functions parameters

```js
function addTen(a) {
  return a + 10;
}

const fourteen = addTen(4); // any
```

## Any type

one of the reasons for the existence of typescript, is the type checking.
So, in the cases that we dont know the type of data or if we have a dinamic data, we can use any

```js
const formValues: { [field: string]: any } = {
  firstName: "Bob",
  surname: "Smith",
  age: 30,
};
```

## Void type

Basically, void type define that a function doesn't return anything

```js
function logMessage(message: string) {
  console.log(message);
} //void
```

## Never type

the never type is used to represent a type of value who never will exist

```js
const keepLogging = (message: string) => {
  while (true) {
    console.log(message);
  }
}; //never
```
another exemple:
```js
function outputMessage(message: string) {
    if (typeof message === "string") {
        console.log(message);
    } else {
        let invalid = message;
        console.error(invalid);
    }
}
```
what is the type of the `invalid` variable? -> `never`!
Because our code will never reach the invalid variable, because message is a string.

So, the main difference between any and never, is that, never will never return a value, while, the void type will return nothing. lol

## Unknown type

unknown type is similar to any, but is type-safe
means that it is more strict in that it requires the developer to explicitly check the type

```js
function add(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}
```

in this case, we first need to check the type of the return, even if we not know it before

## type predicate

suppose we have a type `Person`

```js
type Person = {
  id: string,
  name: string,
};
```

and we wanna check that an object is of type `Person`

```js
function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}
```
`person is Person` is our type predicate

## type assertions

there scnerius where the return type is wider than we need for our use case.
so, the way to tell the typescript compiler to work in this cases is using type assertions.

just remember the `as` syntax:
```js
function getAge(id: number): any {
  return 42;
}
function calcDiscount(age: number) {
  return age / 100;
}

const discount3 = calcDiscount(getAge(1) as number);
```

"When using type assertions, we must know more about the data being used in the program than TypeScript does, or runtime problems could occur."

