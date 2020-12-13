console.log("AES Cryto Testing")
import {AES} from "https://deno.land/x/god_crypto/aes.ts";

const aes = new AES("Hello World AES!", {
    mode: "cbc",
    iv: "random 16byte iv",
});
const cipher = await aes.encrypt("This is AES-128-CBC. It works.");
console.log(cipher.hex());

// console.log("JWT Testing")
import {sign, signInterface} from "../jwt.ts"
//

// sign()

// Testing LODASH
// import {isInteger} from "../src/jsonwebtoken/utilities/common.ts"
//
// let number = 213
// isInteger(number)

type Lyhour = {
    name: String
}

let person: Lyhour = {
    name: "hahah"
}

console.log(typeof person.name)
