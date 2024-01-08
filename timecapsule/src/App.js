import './App.css';
import Main from './pages/Main/Main/Main';
import Mypage from './pages/Main/Mypage/Mypage';
import Nickname from './pages/Main/Nickname/Nickname';
import Withdraw from './pages/Main/Withdraw/Withdraw';
function App() {
    return (
        <div className="App">
            <p>이곳에 컴포넌트 추가</p>
            <Main />
            <Mypage />
            <Nickname />
            <Withdraw />
        </div>
    );
}

export default App;
