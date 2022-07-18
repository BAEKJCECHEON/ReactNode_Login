import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                        //아이디 & 비밀번호 맞을때
                        sessionStorage.setItem('user_id', inputId);
                        document.location.href = '/Success';
                        alert(res.data.msg);
                    } else {
                        //비밀번호가 다를때
                        alert(res.data.msg);
                        document.location.href = '/Login';
                    }
                } else {
                    //아이디가 없을때
                    alert(res.data.msg);
                    document.location.href = '/Login';
                }
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
            <Link to="/Sign">회원가입</Link>
        </div>
    );
}

export default Login;
