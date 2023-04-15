import { randomBytes, pbkdf2Sync } from "crypto";

/**
 * Given the input, salt and the stored hash,
 * return if the password is valod or no.
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean}
 */
export const validadePassword = (
  inputPassword: string,
  salt: string,
  storedHash: string
): boolean => {
  const inputHash = pbkdf2Sync(
    inputPassword,
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");
  return storedHash === inputHash;
};

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
export const hashPassword = (
  password: string
): { hash: string; salt: string } => {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

  return { hash, salt };
};
