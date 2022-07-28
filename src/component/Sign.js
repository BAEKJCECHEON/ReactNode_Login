import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Container } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';

function Sign() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleChange1 = (e) => {
        const idRegEx = /^[A-Za-z0-9]{8,20}$/;
        if (idRegEx.test(e.target.value)) {
            document.getElementById('error1').style.display = 'none';
            setInputId(e.target.value);
            console.log('입력됨' + e.target.value);
        } else {
            document.getElementById('error1').style.display = '';
        }
    };

    const handleChange2 = (e) => {
        const pwRegEx = /^[A-Za-z0-9]{8,20}$/;
        if (pwRegEx.test(e.target.value)) {
            document.getElementById('error2').style.display = 'none';
            setInputId(e.target.value);
            console.log('입력됨' + e.target.value);
        } else {
            document.getElementById('error2').style.display = '';
        }
    };

    const submitId = () => {
        console.log('btn click');
        axios
            .post('http://localhost:3001/idplz', {
                user_id: inputId,
                user_pw: inputPw,
            })
            .then((res) => {
                if (res.data.stat == 'noSign') {
                    //가입미완료
                    alert(res.data.msg);
                } else if (res.data.stat == 'yesSign') {
                    //가입완료
                    alert(res.data.msg);
                    document.location.href = '/';
                } else {
                    //공백문자
                    alert(res.data.msg);
                }
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 'auto', bgcolor: 'gray' }}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ m: 1, color: '#3C3E50', fontSize: '1.65rem', fontWeight: '600' }}>
                    회원가입
                </Typography>
                <TextField label="아이디" id="id" name="id" margin="normal" fullWidth autoComplete="아이디" autoFocus required onChange={handleChange1} />
                <span id="error1" name="error" style={{ color: 'red', display: 'none' }}>
                    올바른 아이디 양식이 아닙니다.
                </span>
                <TextField label="패스워드" id="password" name="password" margin="normal" fullWidth type="password" required autoComplete="패스워드" onChange={handleChange2} />
                <span id="error2" name="error" style={{ color: 'red', display: 'none' }}>
                    올바른 비밀번호 양식이 아닙니다.
                </span>
                <Button type="submit" fullWidth variant="contained" onClick={submitId} sx={{ mt: 2 }}>
                    회원가입
                </Button>
            </Box>
        </Container>
    );
}

export default Sign;
