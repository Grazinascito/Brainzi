## why we need automated tests?

- Improved Test Accuracy
- Release Confidence
- Faster Dev Process
- Eventual Return on Investment
- Facilitate CI & CD

Example of an manual test:

```js
function isEmail(email) {
  const regex = new RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/);
  return regex.test(email);
}

function it_should_return_false_when_invalid_email() {
  const email = "pacoca22_(@#*";
  const isValid = isEmail(email);

  console.log(
    !isValid ? "✅ PASS:" : "❌ FAIL:",
    "The function should return false when a invalid email is passed intoit"
  );

  return isValid;
}

it_should_return_false_when_invalid_email();
```

## Using meaningful names for test

A well-named test will contain the following:

- What is being tested
- the input to the thing being tested or the state of the thing being tested
- the expect output or expected behavior

#### A good example:

`{thing being tested} should {expected output / behaviour} when {input / state}`

```js
test("getName should return correct name when 0 passed in", async () => {
  const name = await getName(0);
  expect(name).toBe("Bill");
});
```
