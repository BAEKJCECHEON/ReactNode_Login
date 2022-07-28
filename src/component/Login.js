import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    //const islogin = props.islogin;

    const idInputCheck = (e) => {
        const idRegEx = /^[A-Za-z0-9]{8,20}$/;
        if (idRegEx.test(e.target.value)) {
            document.getElementById('error1').style.display = 'none';
            setInputId(e.target.value);
            console.log('입력됨' + e.target.value);
        } else {
            document.getElementById('error1').style.display = '';
        }
    };

    const pwInputCheck = (e) => {
        const pwRegEx = /^[A-Za-z0-9]{8,20}$/;
        if (pwRegEx.test(e.target.value)) {
            document.getElementById('error2').style.display = 'none';
            setInputId(e.target.value);
            console.log('입력됨' + e.target.value);
        } else {
            document.getElementById('error2').style.display = '';
        }
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
                        document.location.href = '/';
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
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ m: 1, color: '#3C3E50', fontSize: '1.65rem', fontWeight: '600' }}>
                    로그인
                </Typography>
                <TextField label="아이디" id="id" name="id" margin="normal" fullWidth autoComplete="아이디" autoFocus required onChange={idInputCheck} />
                <span id="error1" name="error" style={{ color: 'red', display: 'none' }}>
                    올바른 아이디 양식이 아닙니다.
                </span>
                <TextField label="패스워드" id="password" name="password" margin="normal" fullWidth type="password" required autoComplete="패스워드" onChange={pwInputCheck} />
                <span id="error2" name="error" style={{ color: 'red', display: 'none' }}>
                    올바른 비밀번호 양식이 아닙니다.
                </span>
                <Button type="submit" fullWidth variant="contained" onClick={btnClick} sx={{ mt: 2 }}>
                    로그인
                </Button>
                <Grid container sx={{ mt: 2, color: '#448FD5', fontSize: '1.07rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Grid item>회원가입을 하시겠습니까?</Grid>
                    <Grid item>
                        <Link to="/Sign">회원가입</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Login;
