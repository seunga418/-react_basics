// promise - 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 비동기 작업을 감싸는 객체
// 3가지 상태 - 1. 대기(pending): 아직 작업이 완료되지 않는 상태, 2. 성공(fulfilled): 비동기 작업이 성공적으로 마무리 된 상태, 3. 실패(rejected): 비동기 작업이 실패한 상태
// 대기 -> 성공(해결), 대기 -> 실패(거부)

function add10(num) {
    const promise = new Promise((reslove, reject) => { // reslove - 결과값, reject - 이유
        // 비동기 작업을 실행하는 함수
        // executor 함수
        setTimeout(() => {
            if(typeof num === 'number'){
                reslove(num + 10);
            }else {
                reject('num이 숫자가 아닙니다');
            }
        }, 2000);
    });

    return promise;
}

add10(0).then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => { // 연결하여 작성
    console.log(result);
    return add10(undefined)
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// then 메서드
// -> 그 후에
promise.then((value) => {
    console.log(value);
}).catch((error) => { // 실패시에 이 코드 실행
    console.log(error);
}); // 이러한 형식을 promise Chaining이라고 함

