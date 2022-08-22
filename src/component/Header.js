import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import './header.scss';

const Header = (props) => {
    const logout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            sessionStorage.removeItem('user_id');
            document.location.href = '/';
        }
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
