const Button = ({children, text, color = 'black'}) => { // 기본값 설정
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button 
            onClick = {onClickButton}
            // onMouseEnter = {{onClickButton}}
            style = {{color: color}}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'black',

}

export default Button;