import './Nickname.css';
const Nickname = () => {
    const nickname = 'nickname';
    return (
        <>
            <div className="container">
                <div className="nickname-modal">
                    <div className="title">닉네임설정</div>
                    <div>
                        <input type="text" placeholder={nickname}></input>
                    </div>
                    <div className="buttons">
                        <button className="button2 white">확인</button>
                        <button className="button2">취소</button>
                    </div>
                </div>
                <div class="withdraw">계정 탈퇴</div>
            </div>
        </>
    );
};

export default Nickname;
