import mul, { add, sub } from "./math.js"; // 같은 경로라면 합쳐서 불러돠도 됨

import randomColor from 'randomcolor';

const color = randomColor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));