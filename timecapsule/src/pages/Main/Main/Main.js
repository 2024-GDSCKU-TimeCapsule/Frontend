import './Main.css';
import menu from './img/Subtract.svg';
import create from './img/Vector.svg';
import mycapsule from './img/Union.svg';
import archiving from './img/Group 22.svg';
<style>import url('https://fonts.cdnfonts.com/css/post-no-bills-jaffna');</style>;

const Main = () => {
    const dday = 235;
    return (
        <div className="container">
            <div className="dday-circle">
                <div className="dday-progress">
                    <div className="dday">D-{dday}</div>
                    <div className="dday-text">Unsealed December 31, 2024</div>
                </div>
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
        </div>
    );
};

export default Main;
