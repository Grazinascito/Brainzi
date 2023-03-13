Basically, it is a role that verifies if a function was defined before the call, if not, the calling wont occur, it avoid errors

example:

```js
onCloseMenu() // we are always calling this function anyway
onCloseMenu?.() // we are just calling it, when we have a function defined
```
