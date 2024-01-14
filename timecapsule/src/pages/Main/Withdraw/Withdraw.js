import './Withdraw.css';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
const Withdraw = () => {
    return (
        <>
            <div className="main-container dark">
                <Header />
                <div className="modal-background">
                    <div className="withdraw-modal">
                        <div className="content">
                            <div className="title">정말 탈퇴하시겠습니까?</div>
                            <div className="text">
                                탈퇴버튼 선택시, <br></br> 계정은 삭제되며 복구되지 않습니다.
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="button2 white">확인</button>
                            <button className="button2">취소</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Withdraw;
