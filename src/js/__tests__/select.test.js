import cardSelect from "../select";

test("must choose a card", () => {
  expect(cardSelect(4024007183645802)).toBe("Visa");
  expect(cardSelect(5416768397601955)).toBe("MasterCard");
  expect(cardSelect(378594162396515)).toBe("AmericanExpress");
  expect(cardSelect(6011052882395226)).toBe("Discover");
  expect(cardSelect(3536044822291618)).toBe("JCB");
  expect(cardSelect(30284216703813)).toBe("DinersClub");
  expect(cardSelect(2201382000000013)).toBe("Mir");
});

test("should abort validation if the card number is invalid", () => {
  expect(cardSelect(1234567890123456)).toBe(undefined);
});
