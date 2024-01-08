import './Mypage.css';
// import background from "./img/자산 2ss 1.png"
const Mypage = () => {
    const nickname = 'nickname';
    const email = 'email@korea.ac.kr';
    return (
        <>
            <div className="container">
                <div class="nickname">{nickname} 님</div>
                <div class="email">{email}</div>
                <button class="button1 white">닉네임 수정하기</button>
                <div class="withdraw">계정 탈퇴</div>
            </div>
        </>
    );
};

export default Mypage;
