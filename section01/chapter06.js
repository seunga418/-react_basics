// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = '20';

const result = num + str; // num이 묵시적으로 string형으로 변환됨
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시

// -> 문자열 -> 숫자
let  str1 = "10";
let strToNum1 = Number(str1); // Number() 내장함수 이용
console.log(10 + strToNum1)

let str2 = '10개'; // 숫자와 문자가 섞여있는 문자열 (문자가 앞에 있으면 안됨)
let str1ToNum2 = parseInt(str2); // parseInt() 내장함수 이용 (정수 변환)

console.log(10 + str1ToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");