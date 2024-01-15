import './Main.css';
import menu from './img/Subtract.svg';
import create from './img/Vector.svg';
import mycapsule from './img/Union.svg';
import archiving from './img/Group 22.svg';
import setting from './img/레이어_1.svg';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import dayjs from 'dayjs';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import { Link } from 'react-router-dom';

const Main = () => {
    const dday = leftdays();
    const progress = ((365 - dday) / 365) * 100;
    return (
        <div className="main-container">
            <Header />
            <Link to="/mypage">
                <img className="setting-icon" src={setting} alt="setting-icon" />
            </Link>
            <div className="dday-circle">
                <CircularProgressbarWithChildren value={progress}>
                    <div className="main-dday">D-{dday}</div>
                    <div className="dday-text">Unsealed December 31, 2024</div>
                </CircularProgressbarWithChildren>
            </div>

            <div className="nav">
                <Link to="/capsule">
                    <div className="create">
                        <img src={create} alt="create" />
                    </div>
                </Link>
                <div className="menu">
                    <img src={menu} alt="menu" />
                    <Link to="/mycapsule">
                        <img className="mycapsule" src={mycapsule} alt="mycapsule" />
                    </Link>
                    <Link to="/capsulearchiving">
                        <img className="archiving" src={archiving} alt="archiving" />
                    </Link>
                </div>
            </div>
            <div className="main-footer">
                <Footer />
            </div>
        </div>
    );
};

const leftdays = () => {
    const today = dayjs();
    const endOfYear = dayjs().endOf('year');
    const daysLeft = endOfYear.diff(today, 'day');
    if (daysLeft === 0) {
        return 'DAY';
    } else {
        return daysLeft;
    }
};

export default Main;
