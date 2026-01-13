// 반복문
for (let idx = 1; idx <= 10; idx++ ) { // for (초기식-변수선언; 조건식-언제까지 반복할지; 증감식-얼마나 증가할지)
    if (idx % 2 === 0) {
        continue; // 특정 횟차 건너뛰기
    }
    console.log(idx);

    if(idx >= 5) { // idx가 5 이상이 되면 반복문 종료
        break;
    }
}