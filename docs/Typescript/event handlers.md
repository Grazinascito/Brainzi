If we wanna create an input with the `onChange` event handler to update the state of the input, like this:

```js
<input
  type="text"
  value={criteria}
  onChange={(e) => setCriteria(e.currentTarget.value)}
/>
```

typescript will infer the type of the event to -> `React.ChangeEvent<HTMLInputElement>`

#### But if we change the input to `named event handler`, like this:

```js
const [criteria, setCriteria] = React.useState("");

const handleChange = (e) => setCriteria(e.currentTarget.value);

return <input type="text" value={criteria} onChange={handleChange} />;
```

typescript will not infer the type, it will gonna be `any`

#### But there is no problem because we already know about the onChange event type

```js
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setCriteria(e.currentTarget.value);
```

