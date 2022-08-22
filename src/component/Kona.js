import kona from '../img/kona.JPG';
import { Link } from 'react-router-dom';

const Kona = () => {
    return (
        <>
            <img src={kona}></img>
            <br />
            <br />
            <Link to="/" style={{ fontSize: '22px' }}>
                돌아가기
            </Link>
            <br />
            <br />
            <br />
        </>
    );
};
export default Kona;
