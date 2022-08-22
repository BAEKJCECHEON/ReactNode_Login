const Success = (props) => {
    const logout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    };
    return (
        <>
            <div>
                <h1>환영합니다.</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2>Hyundai</h2>
                <span style={{ fontSize: '20px' }}>Kona</span>
            </div>
        </>
    );
};

export default Success;
