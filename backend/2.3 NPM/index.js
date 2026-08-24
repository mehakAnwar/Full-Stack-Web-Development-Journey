// var generateName = require("sillyname");  => type= commonjs (pkg.json)

/* import generateName from "sillyname"            // type=module
var sillyname = generateName();

console.log(`My name is ${sillyname}.`)
 */

import {randomSuperhero} from "superheroes"
const name = randomSuperhero();
console.log(`My name is ${name}.`)