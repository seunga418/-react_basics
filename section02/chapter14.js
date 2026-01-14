// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() { // 함수 선언할 때, async를 붙여주면 비동기로 바뀜
    return {
        name: '박승아',
        id: 'seunga'
    };
};

async function getData2() {
    return new Promise((resolve, reject) => { // 애초에 프로미스를 반환하는 함수이면 그냥 프로미스를 반환함
        setTimeout(() => {
            resolve({
                name: '박승아',
                id: 'seunga'
            });
        }, 1500);
    });
};

console.log(getData());

// await
// async 함수 내부에서만 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() { // async와 await을 사용하면 then 메서드를 사용하지 않아도 됨
    const data = await getData();
    console.log(data)
}

printData();