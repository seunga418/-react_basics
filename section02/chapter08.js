// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function(item, idx,arr) { // item: 현재 요소의 값, idx: 현재 반복 카운트, arr: 전체 배열의 값
    console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);

// 3. indexOf
// 배열에서 특정 요소의 인덱스를 반환하는 메서드
// 요소가 없으면 -1 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

let objectArr = [
    {name : '박승아'},
    {name : '김철수'},
]

console.log(
    objectArr.indexOf({name : '박승아'}) // 서로 다른 객체로 인식하여 -1 반환
);

console.timeLog(
    objectArr.findIndex(
        (item) => item.name === '박승아'
    )
);

// 4. findIndex
// 모든요소를 순화하면서 콜백함수를 만족하는(참을 반환하는)
// 특정 요소의 인덱스를 반환하는 메서드
// 요소가 없으면 -1 반환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
    if (item % 2 !== 0) return true;
});

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name : '박승아'},
    {name : '김철수'}
]

const finded = narr5.find(
    (item) => item.name === '박승아'
);

console.log(finded);
