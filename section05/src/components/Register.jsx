// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {

    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');

    const onChangeName = (e) => {
        console.log(e);
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
        <div>
             <div>
                <input 
                    value = {name}
                    onChange = {onChangeName}
                    placeholder = {"이름"}
                /> {/* placeholder은 가이드 문구 */}
            </div>

            <div>
                <input
                    value = {birth}
                    onChange = {onChangeBirth}
                    type = 'date' 
                />
            </div>

            <div>
                <select value = {country} onChange = {onChangeCountry}>
                    <option vlaue = 'kr'>한국</option>
                    <option vlaue = 'us'>미국</option>
                    <option vlaue = 'uk'>영국</option>
                    {country}
                </select>
            </div>
            <div>
                <textarea />
            </div>
        </div>
    );
};

export default Register;