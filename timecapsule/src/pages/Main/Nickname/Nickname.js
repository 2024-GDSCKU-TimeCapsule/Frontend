import './Nickname.css';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
const Nickname = () => {
    const nickname = 'nickname';
    return (
        <>
            <div className="container">
                <Header />
                <div className="modal">
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
                <Footer />
            </div>
        </>
    );
};

export default Nickname;
