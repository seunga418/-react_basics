// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 (빈칸으로 호출 시 현재 날짜와 시간)
console.log(date1);

let date2 = new Date('2024-06-15'); // 문자열로 날짜와 시간 지정
console.log(date2);

// 2. 타임 스탬프
// 특정  시간이 "1970.01.01 00:00:00"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도
let month = date1.getMonth() + 1; // 월 -> 월은 배열의 형태로 출려됨
let date = date1.getDate(); // 날짜
let hours = date1.getHours(); // 시
let minutes = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초

console.log(
    year,
    month,
    date,
    hours,
    minutes,
    seconds
)

// 4. 시간 수정하기
date1.setFullYear(2025); // 2025년
date1.setMonth(11); // 12월
date1.setDate(25); // 25일
date1.setHours(15); // 15시
date1.setMinutes(30); // 30분
date1.setSeconds(45); // 45초

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());