import { Link } from 'react-router-dom';
const Buttons = () => {
    return (
        <>
            <Link to="/Login">로그인</Link>
            <Link to="/Sign">회원가입</Link>
        </>
    );
};

export default Buttons;
