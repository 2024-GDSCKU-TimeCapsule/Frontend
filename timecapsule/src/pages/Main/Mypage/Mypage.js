import './Mypage.css';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import { Link } from 'react-router-dom';
const Mypage = () => {
    const nickname = 'nickname';
    const email = 'email@korea.ac.kr';
    return (
        <>
            <div className="main-container">
                <Header />
                <div class="nickname">{nickname} 님</div>
                <div class="email">{email}</div>
                <Link to="/nickname">
                    <button class="button1 white">닉네임 수정하기</button>
                </Link>
                <Link to="/withdraw">
                    <div class="withdraw">계정 탈퇴</div>
                </Link>

                <Footer />
            </div>
        </>
    );
};

export default Mypage;
