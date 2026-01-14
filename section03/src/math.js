// math 모듈

export function add(a, b) {
    return a + b;
};

export function sub(a, b) {
    return a - b;
};

// module.exports = {
//     add, // 키 값과 변수의 이름이 똑같을 경우에는 하나만 남겨둬 괜찮음
//     sub
// };

export default function multiply(a,b) { // export default로 내보내게 되면 기본값으로 내보내짐
    return a * b;
}