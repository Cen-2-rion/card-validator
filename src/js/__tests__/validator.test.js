import cardValidator from "../validator";

test.each([
  [4155088469983464, true],
  [6011605960422137, true],
])("card number %i is valid", (number) => {
  expect(cardValidator(number)).toBe(true);
});

test.each([
  [4155088469983465, false],
  [6011605960422138, false],
])("card number %i is invalid", (number) => {
  expect(cardValidator(number)).toBe(false);
});
