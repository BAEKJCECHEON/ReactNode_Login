import React, { Component, useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Sign from './component/Sign';
import Login from './component/Login';
import Buttons from './component/Buttons';
import Home from './component/Home';
import Success from './component/Success';
import Kona from './component/Kona';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    //const [islogin, setIslogin] = useState(false);
    const [user_name, setUserName] = useState('비회원');

    useEffect(() => {
        if (sessionStorage.getItem('user_id') === null) {
            //세션이 없을때
            //console.log('isLogin?? :: ', islogin);
        } else {
            //세션이 있을때
            const user_id = sessionStorage.getItem('user_id');
            //로그인상태를 true로변경
            //setIslogin(true);
            setUserName(user_id);
            //console.log('isLogin?? :: ', islogin);
        }
    });

    return (
        <div className="App">
            <BrowserRouter>
                <Header user_name={user_name} />
                <Routes>
                    <Route path="/" element={<Home user_name={user_name} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Sign" element={<Sign />} />
                    <Route path="/Buttons" element={<Buttons />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path="/Kona" element={<Kona />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
