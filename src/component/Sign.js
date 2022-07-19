import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Container } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';

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
                document.location.href = '/';
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
                <TextField label="패스워드" id="password" name="password" margin="normal" fullWidth type="password" required autoComplete="패스워드" onChange={handleChange2} />
                <Button type="submit" fullWidth variant="contained" onClick={submitId} sx={{ mt: 2 }}>
                    회원가입
                </Button>
            </Box>
        </Container>
    );
}

export default Sign;
