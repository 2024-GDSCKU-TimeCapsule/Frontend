import './App.css';
import Main from './pages/Main/Main/Main';
import Mypage from './pages/Main/Mypage/Mypage';
import Nickname from './pages/Main/Nickname/Nickname';
import Withdraw from './pages/Main/Withdraw/Withdraw';

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <Nickname />
            </div>
        </div>
    );
}

export default App;
