"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var PASSWORD = "1234";
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
