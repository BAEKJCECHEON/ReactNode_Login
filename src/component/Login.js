import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    //const islogin = props.islogin;

    const idInputCheck = (e) => {
        setInputId(e.target.value);
    };

    const pwInputCheck = (e) => {
        setInputPw(e.target.value);
    };

    const btnClick = () => {
        console.log('btn click');
        axios
            .post('http://localhost:3001/login', {
                user_id: inputId,
                user_pw: inputPw,
            })
            .then((res) => {
                if (res.data.rows[0].test_body === inputId) {
                    if (res.data.rows[0].test_pw === inputPw) {
                        alert(res.data.msg);
                    } else {
                        alert(res.data.msg);
                    }
                } else {
                    alert(res.data.msg);
                }
                document.location.href = '/';
            });
    };

    return (
        <div>
            <h1>로그인</h1>
            <label style={{ fontsize: '12px' }}>
                아이디 : <input className="inputId" id="inputId" name="inputId" type="text" onChange={idInputCheck} style={{ marginLeft: '14px' }}></input>
            </label>
            <label style={{ fontsize: '12px' }}>
                비밀번호 : <input className="inputPw" id="inputPw" name="inputPw" type="password" onChange={pwInputCheck}></input>
            </label>
            <button className="loginBtn" type="button" onClick={btnClick} style={{ margin: '10px', fontSize: '14px' }}>
                로그인
            </button>
        </div>
    );
}

export default Login;
