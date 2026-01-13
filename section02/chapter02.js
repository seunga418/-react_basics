function returnFalse() {
    console.log('False 함수');
    return false;
}

function returnTrue() {
    console.log('True 함수');
    return true;
}

// 단락 평가
console.log(returnFalse() && returnTrue()); // 첫 번째 값이 false이므로 두번째 함수는 호출되지 않음

// 단락 평가 활용 사례
 function printName(person) {
    const name =  person && person.name;
    console.log(name || 'person의 값이 없음');
 }

printName();
printName({ name : '박승아' });