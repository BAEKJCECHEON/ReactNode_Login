import React, { Component, useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Sign from './component/Sign';
import Login from './component/Login';
import Success from './component/Success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {
    //const [islogin, setIslogin] = useState(false);
    const [user_name, setUserName] = useState('비회원');

    /*
    useEffect(() => {
        if (sessionStorage.getItem('user_id') === null) {
            //세션이 없을때
            console.log('isLogin?? :: ', islogin);
        } else {
            //세션이 있을때
            const user_id = sessionStorage.getItem('user_id');
            //로그인상태를 true로변경
            setIslogin(true);
            setUserName(user_id);
            console.log('isLogin?? :: ', islogin);
        }
    });
    */

    return (
        <div className="App-header">
            <BrowserRouter>
                <Header user_name={user_name} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    {/*{islogin ? <Route path="/" element={<Success islogin={islogin} />} /> : <Route path="/Sign" element={<Sign />}/>*/}
                    <Route path="/Sign" element={<Sign />} />
                    <Route path="/Success" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
