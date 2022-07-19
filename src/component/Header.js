import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import './header.scss';

const Header = (props) => {
    const [user_name, setUserName] = useState(props.user_name);

    const logout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    };

    return (
        <div className="header-wrap">
            <div className="header-title">
                <Link to="/">
                    <span>시큐어 포인트</span>
                </Link>
            </div>

            <div className="header-menu">
                <span>{props.user_name}님</span>
                {props.user_name === '비회원' ? (
                    <Buttons />
                ) : (
                    <a style={{ cursor: 'pointer' }} onClick={logout}>
                        로그아웃
                    </a>
                )}
            </div>
        </div>
    );
};

export default Header;
