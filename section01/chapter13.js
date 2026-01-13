// 3. 콜백함수
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log('end');
}

main(() => {
    console.log('sub 함수입니다');
});

// 4. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

// 중복되는 코드가 있을 시에 함수로 분리하여 재사용 가능
repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});