import './Main.css';
import menu from './img/Subtract.svg';
import create from './img/Vector.svg';
import mycapsule from './img/Union.svg';
import archiving from './img/Group 22.svg';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';

const Main = () => {
    const dday = 235;
    const progress = ((365 - dday) / 365) * 100;
    return (
        <div className="main-container">
            <Header />
            <div className="dday-circle">
                <CircularProgressbarWithChildren value={progress}>
                    <div className="dday">D-{dday}</div>
                    <div className="dday-text">Unsealed December 31, 2024</div>
                </CircularProgressbarWithChildren>
            </div>

            <div className="nav">
                <div className="create">
                    <img src={create} alt="create" />
                </div>
                <div className="menu">
                    <img src={menu} alt="menu" />
                    <img className="mycapsule" src={mycapsule} alt="mycapsule" />
                    <img className="archiving" src={archiving} alt="archiving" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
