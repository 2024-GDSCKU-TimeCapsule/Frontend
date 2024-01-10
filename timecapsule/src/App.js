import './App.css';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Main from './pages/Main/Main/Main';
import Mypage from './pages/Main/Mypage/Mypage';
import Nickname from './pages/Main/Nickname/Nickname';
import Withdraw from './pages/Main/Withdraw/Withdraw';

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <Header />
                <Main />
                <Mypage />
                <Nickname />
                <Withdraw />
                <Footer />
            </div>
        </div>
    );
}

export default App;
