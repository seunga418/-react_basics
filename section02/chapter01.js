// 자바스크립트에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

// 1. 거짓인 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; // Not a Number
let f6 = ''; // 빈 문자열
let f7 = 0n; // BigInt 0

// 2. 참인 값
// -> 7가지 거짓인 값들을 제외한 나머지 모든 값
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
// 비효율적인 조건문을 좀 더 간결하게 개선할 수 있음
function printName(person) {
    if(!person) { // person이 거짓인 값이라면(값이 없으면)
        console.log('person의 값이 없음');
        return;
    }
    console.log(person.name);
}

let person = null; // undefined 상태(에러)
printName(person);