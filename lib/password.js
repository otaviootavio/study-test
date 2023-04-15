"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validadePassword = void 0;
var crypto_1 = require("crypto");
/**
 * Given the input, salt and the stored hash,
 * return if the password is valod or no.
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean}
 */
var validadePassword = function (inputPassword, salt, storedHash) {
    var inputHash = (0, crypto_1.pbkdf2Sync)(inputPassword, salt, 1000, 64, "sha512").toString("hex");
    return storedHash === inputHash;
};
exports.validadePassword = validadePassword;
/**
 * @typedef {Object} HashAndSalt
 * @property {string} hash The hash we got
 * @property {string} salt The salt used for the hash
 */
/**
 * Given the password and the salt, returns a hash for the password and the salt.
 * @param password
 * @returns {HashAndSalt} object containing the hash and the salt used.
 */
var hashPassword = function (password) {
    var salt = (0, crypto_1.randomBytes)(16).toString("hex");
    var hash = (0, crypto_1.pbkdf2Sync)(password, salt, 1000, 64, "sha512").toString("hex");
    return { hash: hash, salt: salt };
};
exports.hashPassword = hashPassword;
