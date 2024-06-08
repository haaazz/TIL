// const moduleData = require("./math");
// const { add, sub } = require("./math") 로도 사용 가능함

// console.log("HELLO, Node.js!");
// console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }
// console.log(moduleData.add(1, 2)); // 3
// console.log(moduleData.sub(1, 2)); // -1

import { add, sub } from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));

const color = randomColor();
console.log(color);
