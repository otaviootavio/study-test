import { validadePassword, hashPassword } from "./password";

const PASSWORD = "1234";

const VALUE = {
  hash: "2bbb75c5ecf293b4ab27708c3b1e88839c13d8e1e40bc78be38be062dadcfe9c42bb9830ab3d1cd6c216f7831b643a61c29ad0b0da501b419bd81f4d6187f133",
  salt: "c5c4fb53ed14f7836c41c357e40f29bf",
  string: "1234",
  wrongString: "1111",
};

describe("hashPassword", () => {
  test("hashPassword returns an object with hash", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("hash");
  });

  test("hashPassword returns an object with salt", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("salt");
  });
});

describe("validatePassword", () => {
  test("with correct password", () => {
    expect(validadePassword(VALUE.string, VALUE.salt, VALUE.hash)).toBe(true);
  });

  test("with wrong password", () => {
    expect(validadePassword(VALUE.wrongString, VALUE.salt, VALUE.hash)).toBe(
      false
    );
  });
});
