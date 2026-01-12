// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) { // 참일때
    console.log("num은 10 이상입니다");
    console.log("조건이 참입니다");
}
else if(num >= 5){ // if가 아닌 다른 조건이 참일때
    console.log('num은 5 이상입니다');
}
else { // 참이 아닐때
    console.log('조건이 거짓입니다');
}

// 2. switch 조건문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적
let animal = 'cat';

switch(animal) {
    case 'cat':{
        console.log('고양이입니다');
        break;
    }
    case 'dog':{
        console.log('강아지입니다');
        break;
    }
    case 'bear':{
        console.log('곰입니다');
        break;
    }
    case 'snake':{
        console.log('뱀입니다');
        break;
    }
    case 'tiger':{
        console.log('호랑이입니다');
        break; // break문을 만나면 switch문을 빠져나감
    }
    default:{
        console.log('어떤 동물인지 모르겠습니다');
        break;
    }
}