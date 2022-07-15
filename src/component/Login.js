import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [userid, setUserid] = useState('');
    const [userpw, setUserpw] = useState('');

    const idInputCheck = (e) => {
        setUserid(e.target.value);
        console.log(userid);
    };

    const pwInputCheck = (e) => {
        setUserpw(e.target.value);
    };

    const btnClick = () => {
        axios
            .post('http://localhost:3001/login', {
                userid: userid,
                userpw: userpw,
            })
            .then((res) => {
                console.log(res);
                console.log('res.data.userid :: ', res.data.userid);
                if (res.data.userid === undefined) {
                    // id 일치하지 않는 경우 userid = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                    console.log('======================', res.data.msg);
                    alert('입력하신 id 가 일치하지 않습니다.');
                } else if (res.data.userid === null) {
                    // id는 있지만, pw 는 다른 경우 userid = null , msg = undefined
                    console.log('======================', '입력하신 비밀번호 가 일치하지 않습니다.');
                    alert('입력하신 비밀번호 가 일치하지 않습니다.');
                } else if (res.data.userid === userid) {
                    // id, pw 모두 일치 userid = userid, msg = undefined
                    console.log('======================', '로그인 성공');
                    sessionStorage.setItem('userid', userid);
                }
            });
    };

    return (
        <div>
            <h1>로그인</h1>
            <label style={{ fontsize: '12px' }}>
                아이디 : <input className="userid" id="userid" name="userid" type="text" onChange={idInputCheck} style={{ marginLeft: '14px' }}></input>
            </label>
            <label style={{ fontsize: '12px' }}>
                비밀번호 : <input className="userpw" id="userpw" name="userpw" type="password" onChange={pwInputCheck}></input>
            </label>
            <button className="loginBtn" type="button" onClick={btnClick} style={{ margin: '10px', fontSize: '14px' }}>
                로그인
            </button>
        </div>
    );
}

export default Login;
