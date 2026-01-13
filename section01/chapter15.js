// 객체 - 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프러퍼티(객체 속성)
let person = {
    name : '박승아', // 키는 문자열 또는 숫자열만 가능
    age : 18,
    hobby : '게임',
    job : 'FE Developer',
    10 : 20,
    "like cat" : true // 뛰어쓰기는 따옴표로 묶기
}

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄효 표기법)
let name = person.name; // 점 표기법
console.log(name);
let name2 = person.name2; // 존재하지 않는 프로퍼티 접근시 undefined 반환
console.log(name2);

let age = person['age']; // 괄호 표기법 - 프로퍼티에 따옴표 필수(변수로 인식하기 때문)
console.log(age);
let age2 = person['age2']; // 존재하지 않는 프로퍼티 접근시 undefined 반환
console.log(age2);

let property = 'hobby';
let hobby = person[property]; // 변수로 프로퍼티 접근 가능
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = 'fe developer';
person['favoriteFood'] = '떡볶이';

console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = 'educator';
person['favoriteFood'] = '초콜릿';

console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = 'name' in person;
let result2 = 'cat' in person;
console.log(result1);
console.log(result2);