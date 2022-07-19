import React from 'react';
import "./home.scss";

const Home = () => {
    return (
        <div className='home-wrap'>
            <div className='home-title'>
                <span>시큐어포인트</span>에 오신걸 환영합니다.
            </div>
            <div className='home-contents'>
                <span>네트워크 보안의 원포인트, 시큐어포인트</span><br/>
                긍정적인 사고와 열정적인 마음으로 변화하는 기업으로<br/>
                네트워크 인프라 기반의 IT 보안 서비스를 제공하는 전문 기업입니다.
            </div>
        </div>
    );
};

export default Home;
