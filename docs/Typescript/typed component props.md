### React.FC type

FC -> Function Component 

FC type is used to strongly type component on arrow function components

```js
const Hello: React.FC<Props> = ({ who }) => (
  <p>Hello, {who}</p>
);
```

but why we need FC type?

there are some minor benefits:

* provides some type safety on defaultProps
* includes the `children` prop type, so you don't have to define it explicitly - but, it is arguably better to explicitly define `children`