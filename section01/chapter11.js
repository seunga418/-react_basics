// 함수선언
function greeting() {
    console.log("안녕하세요");
}

console.log("호출 전");
greeting(); // 함수 호출
console.log("호출 후");

// ex
function getArea (width, height) { // 매개변수
    function another() { // 중첩 함수
        console.log('another');
    }
    another();

    let area = width * height;
    return area; // 반환값
}

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문들을 호출문보다 아래에 둬도 정상적으로 동작하는 현상

getArea(10, 20); // 괄호안의 값들(인수)을 함수가 받아서 사용

let area1 = getArea(30, 20); // return 문을 활용하여 변수 생성 가능
console.log(area1);

let area2 = getArea(120, 200);
console.log(area2);