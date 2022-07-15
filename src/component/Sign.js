import axios from 'axios';
import React, { useState } from 'react';

function Sign() {
    const [testbody, setTestbody] = useState('');
    const [testpw, setTestpw] = useState('');

    const handleChange1 = (e) => {
        setTestbody(e.target.value);
    };

    const handleChange2 = (e) => {
        setTestpw(e.target.value);
    };

    const submitId = () => {
        axios
            .post('http://localhost:3001/idplz', {
                testbody: testbody,
                testpw: testpw,
            })
            .then((res) => {
                if (res.data.message) {
                    console.log('test');
                } else {
                    console.log('test success');
                }
            });
    };

    return (
        <div>
            <h1 style={{ marginTop: '80px' }}>회원가입</h1>
            <label style={{ fontsize: '12px' }}>
                아이디 : <input className="testbody" name="testbody" type="text" onChange={handleChange1} style={{ marginLeft: '14px' }}></input>
            </label>
            <label style={{ fontsize: '12px' }}>
                비밀번호 : <input className="testpw" name="testpw" type="password" onChange={handleChange2}></input>
            </label>
            <button className="addBtn" onClick={submitId} style={{ margin: '10px', fontSize: '14px' }}>
                가입하기
            </button>
        </div>
    );
}

export default Sign;
