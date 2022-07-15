import axios from 'axios';
import Login from './Login';

import React, { Component, useState, useRef, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Success = (props) => {
    return (
        <>
            <div>
                <h1>로그인 성공</h1>
                <h5 style={{ paddingLeft: '150px', marginLeft: '150px' }}> {props.user_name}님 안녕하세요</h5>
            </div>
        </>
    );
};

export default Success;
