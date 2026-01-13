// 스코프
// 우리말로 '범위'를 뜻함
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함

// -> 전역(전체 영역) 스코프 / 지역 스코프
// 전역스코프 : 전체 영역에서 접근 가능
// 지역스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    function funcB() { // 중첩된 지역 스코프 (밖에서 호출 불가)
    }
}

funcA(); // 문제없음
console.log(b); // 오류 발생 - b is not defined

if (true) {
    let c = 1; // 출력시 오류 발생
    function funcC() { // 조건문안의 중첩 함수는 예외
        console.log('funcC');
    }
}

for (let i  = 0; i < 10; i++) { // 초기값도 지역 스코프
    let d = 1; // 출력시 오류 발생
    function funcC() { // 조건문안의 중첩 함수는 예외
        console.log('funcC');
    }
}