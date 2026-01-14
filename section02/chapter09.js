// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    {name : '박승아', hobby : '게임'},
    {name : '김철수', hobby : '게임'},
    {name : '신짱구', hobby : '독서'},
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === '게임'
);

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => { // item: 현재 요소의 값, idx: 현재 반복 카운트, arr: 전체 배열의 값
    console.log(idx, item);
        return item * 2; // 반환값
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드(원본 배열을 정렬)
let arr3 = [ 'b', 'a', 'c'];
arr3.sort();

let arr4 = [10, 3, 5];
arr4.sort((a,b) => {
    if (a > b){
        // b가 a앞에 오도록
        return 1; // -> b, a 배치
    }else if (a < b){
        // a가 b앞에 오도록
        return -1; // -> a, b 배치
    }else {
        // 두 값의 자리를 바꾸지 않음
        return 0; // -> a, b 자리 그대로 유지
    }
})

console.log(arr3);
console.log(arr4);

// 4. toSorted (최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드(정렬된 배열을 새롭게 반환)
let arr5 = [ 'c', 'a', 'b'];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['안녕', '만나서', '반가워'];
const joined = arr6.join(' ');
console.log(joined);