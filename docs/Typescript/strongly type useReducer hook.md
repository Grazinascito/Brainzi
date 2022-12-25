## basic useReducer

```js
import * as React from "react";
import { render } from "react-dom";

type Increment = {
  readonly type: "increment";
  readonly incrementStep: number;
};

type Decrement = {
  readonly type: "decrement";
  readonly decrementStep: number;
};

type Double = {
  readonly type: "double";
};

type Actions = Increment | Decrement | Double;

type State = {
  count: number;
};

type Props = {
  incrementStep?: number;
  decrementStep?: number;
  initialCount?: number;
};

const neverReached = (never: never) => {};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.incrementStep };
    case "decrement":
      return { count: state.count - action.decrementStep };
    case "double":
      return { count: state.count * 2 };
    default:
      neverReached(action);
  }

  return state;
};

const Counter = ({
  incrementStep = 0,
  decrementStep = 0,
  initialCount = 0
}: Props) => {

  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(
    reducer,
    { count: initialCount }
  );
  return (
    <div>
      <div> {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", incrementStep })}>
        Add {incrementStep}
      </button>
      <button onClick={() => dispatch({ type: "decrement", decrementStep })}>
        Subtract {decrementStep}
      </button>
      <button onClick={() => dispatch({ type: "double" })}>
        Double
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<Counter incrementStep={1} decrementStep={2} />, rootElement);
```
