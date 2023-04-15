# Package NPM Study
Just made it to understand how to build a typescript package.
I totally followed this video https://www.youtube.com/watch?v=RnAJNCj0ut0&t=231s


### Instalation
```
yarn add password-hashing
```

### Usage
```javascript
import { validadePassword, hashPassword } from {otavio-password-pack};

const { const, salt } = hashPassword("YOUR PASSWORD");
const isValid = validatePassword("YOUR PASSWORD", salt, hash)

```
## Functions

<dl>
<dt><a href="#validadePassword">validadePassword(inputPassword, salt, storedHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given the input, salt and the stored hash,
return if the password is valod or no.</p>
</dd>
<dt><a href="#hashPassword">hashPassword(password)</a> ⇒ <code><a href="#HashAndSalt">HashAndSalt</a></code></dt>
<dd><p>Given the password and the salt, returns a hash for the password and the salt.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#HashAndSalt">HashAndSalt</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="validadePassword"></a>

## validadePassword(inputPassword, salt, storedHash) ⇒ <code>boolean</code>
Given the input, salt and the stored hash,
return if the password is valod or no.

**Kind**: global function  

| Param | Type |
| --- | --- |
| inputPassword | <code>string</code> | 
| salt | <code>string</code> | 
| storedHash | <code>string</code> | 

<a name="hashPassword"></a>

## hashPassword(password) ⇒ [<code>HashAndSalt</code>](#HashAndSalt)
Given the password and the salt, returns a hash for the password and the salt.

**Kind**: global function  
**Returns**: [<code>HashAndSalt</code>](#HashAndSalt) - object containing the hash and the salt used.  

| Param |
| --- |
| password | 

<a name="HashAndSalt"></a>

## HashAndSalt : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash we got |
| salt | <code>string</code> | The salt used for the hash |
