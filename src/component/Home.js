import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '100px', height: '120px', alignItems: 'center', fontSize: '18px' }}>
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
                메인페이지입니다.
            </h1>
            <Link to="/Login">로그인</Link>
        </div>
    );
};

export default Home;
