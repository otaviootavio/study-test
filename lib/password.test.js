"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var PASSWORD = "1234";
var VALUE = {
    hash: "2bbb75c5ecf293b4ab27708c3b1e88839c13d8e1e40bc78be38be062dadcfe9c42bb9830ab3d1cd6c216f7831b643a61c29ad0b0da501b419bd81f4d6187f133",
    salt: "c5c4fb53ed14f7836c41c357e40f29bf",
    string: "1234",
    wrongString: "1111",
};
describe("hashPassword", function () {
    test("hashPassword returns an object with hash", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("hash");
    });
    test("hashPassword returns an object with salt", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("salt");
    });
});
describe("validatePassword", function () {
    test("with correct password", function () {
        expect((0, password_1.validadePassword)(VALUE.string, VALUE.salt, VALUE.hash)).toBe(true);
    });
    test("with wrong password", function () {
        expect((0, password_1.validadePassword)(VALUE.wrongString, VALUE.salt, VALUE.hash)).toBe(false);
    });
});
