// 1. 함수 표현식

function funcA() {
    console.log('funcA');
}

let varA = funcA; // 함수 선언 후 변수에 담으면 함수 호출 가능
varA();

// 호이스팅 불가
let varB = function funcB() { // 익명 함수
    console.log('funcB');
};

varB(); // 함수의 이름(funcB)으로는 호출 불가

// 2. 화살표 함수
let varC = (value) => {value + 1}; // 값을 반환하기만 할때 return문 생략 가능

console.log(varC(10));
