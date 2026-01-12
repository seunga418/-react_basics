// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2); // number 타입끼리 덧셈가능
console.log(num1 - num3); // 뺄셈 가능
console.log(num2 * num3); // 곱셈 가능
console.log(num1 / num2); // 나눗셈 가능
console.log(num1 % num2); // 나머지 연산 가능 (모듈러 연산)

let inf = Infinity; // 무한대
let ninf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number (숫자가 아님)

console.log(1* "hello"); //NaN 출력

// 2. String Type
let myName = '박승아'; // 문자열에서는 따옴표 필요
let myLocation = '대구';
let introduce = myName + myLocation; // 문자열 덧셈가능 (이어붙이기)
console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}는 ${myLocation}에 거주합니다`; // 백틱으로 문자열 선언 -> 동적으로 문자열에 포함 가능
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true; // 참
let isSwitchOff = false; // 거짓

// 4. Null Type
let empty = null; // 값이 없음을 표현 (아무것도 없다)

// 5. Undefined Type
let none;
console.log(none); // undefined 출력 (값이 할당되지 않음)