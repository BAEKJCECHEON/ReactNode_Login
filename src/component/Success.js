const Success = (props) => {
    const logout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    };
    return (
        <>
            <div>
                <h1>메인 페이지</h1>
            </div>
        </>
    );
};

export default Success;
