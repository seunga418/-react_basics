// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 배열의 각 요소를 변수에 할당
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : '박승아',
    age : 18,
    hobby : '게임'
}

let {name, age : myAge, hobby, job} = person; // 객체의 각 프로퍼티를 변수에 할당
console.log(name, myAge, hobby, job); // 지정되지 않은 프로퍼티는 undefined

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, job}) => { // 개체를 넘겨야지만 구조 분해 할당이 가능
    console.log(name, age, hobby, job);
}

func(person); // func(10); 일 때는 구조 분해 할당이 안됨