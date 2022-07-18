import axios from 'axios';
import Login from './Login';

import React, { Component, useState, useRef, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Success = (props) => {
    const isLogin = props.isLogin;
    const logout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    };
    return (
        <>
            <div>
                <h1>메인 페이지</h1>
            </div>
            <div>
                <button onClick={logout}>로그아웃</button>
            </div>
        </>
    );
};

export default Success;
