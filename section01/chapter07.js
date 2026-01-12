// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 덧셈, 뺄셈보다 곱셈, 나눗셈, 나머지 연산자가 우선순위가 높음
let num6 = 1 + 2 * 10; // 덧셈이 먼저 계산되게 하고 싶으면 괄호사용
console.log(num6);

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

console.log(num7);

// 4. 증감 연산자
let num8 = 10;
num8++; // num8 = num8 + 1;
console.log(num8);

// ++ 위치에 따라 동작이 다름
num8++; // 1) 전위 연산자
++num8; // 2) 후위 연산자

// 5. 논리 연산자
let or = true || false; // OR

let and = true && false; // AND

let not = !true; // NOT

console.log(or, and, not);

// 6. 비교 연산자
// == 은 자료형까지는 비교하지 않음 (값만 비교)
let comp1 = 1 === 2; // 일치 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);
