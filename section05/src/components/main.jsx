// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음(조건문, 반복문 불가)
// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링됨(불리언, 널 등등 불가)
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 반드시 하나여야만 함(빈 태그로 묶어도 됨)

import "./Main.css";

const Main = () => {
    const user = {
        name: '박승아',
        isLogin: true
    };

    if(user.isLogin){
        return <div className = 'logout'>로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }

    // return (
    //     <>
    //         {user.isLogin? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )}
    //     </>
    // );
};

export default Main;