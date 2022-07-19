import React, { Component, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = (props) => {
    // const [user_name, setUserName] = useState(props.user_name);

    return (
        <div className='header-wrap'>
            <div className='header-title'>
                <Link to="/"><span>시큐어 포인트</span></Link>
            </div>
            
            <div className='header-menu'>
                <span>{props.user_name}님 </span>
                <Link to='/Login'>로그인</Link>
                <Link to='/Sign'>회원가입</Link>
            </div>
            
        </div>
    );
};

export default Header;
