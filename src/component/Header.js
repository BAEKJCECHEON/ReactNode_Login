import React, { Component, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [user_name, setUserName] = useState(props.user_name);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '100px', height: '120px', alignItems: 'center', fontSize: '18px' }}>
            <Link to="/">
                <h1
                    style={{
                        fontWeight: 'bolder',
                        fontSize: '40px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0px',
                    }}
                >
                    Login Test!
                </h1>
            </Link>
            <span>{props.user_name}님 안녕하세요</span>
        </div>
    );
};

export default Header;
