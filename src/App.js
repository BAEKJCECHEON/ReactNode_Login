import React, { Component, useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Sign from './component/Sign';
import Login from './component/Login';
import Loginrun from './component/Loginrun';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
    /*
    const [islogin, setIslogin] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('islogin') === null) {
            console.log('isLogin?? :: ', islogin);
        } else {
            setIslogin(true);
            console.log('isLogin?? :: ', islogin);
        }
    });
*/
    return (
        <div className="App-header">
            <Header />
            <Login />
            <Sign />
        </div>
    );
}

export default App;
