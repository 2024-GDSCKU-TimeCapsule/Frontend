import "./Capsulearchiving.css";
import img15 from "../img/image15.svg";
import img12 from "../img/image12.svg";
import img13 from "../img/image13.svg";
import lock from "../img/lock.svg";
import whiteline from "../img/whiteline.svg";
import goback from "../img/goback.svg";
import dayjs from "dayjs";

function Capsulearchiving() {
  return (
    <>
      <div className="capsulearchiving-container">
        <div>
          <img src={img15} alt="15" className="img15"></img>
          <img src={img12} alt="12" className="img12"></img>
          <img src={img13} alt="13" className="img13"></img>
        </div>
        <div>
          <Upside name="CAPSULE ARCHIVING" />
        </div>
        <div className="ani1">
          <div>
            <img src={lock} alt="lock" className="lock"></img>
          </div>
          <div className="words">아직 타임캡슐이 봉인되어 있어요!</div>
          <div>
            <img src={whiteline} alt="whiteline" className="whiteline"></img>
          </div>
        </div>
        <div>
          <div className="words2">봉인 해제까지 남은 시간</div>
          <div className="dday">D-{leftdays()}</div>
        </div>
      </div>
    </>
  );
}

function Upside(props) {
  return (
    <div>
      <img src={goback} alt="goback" className="goback"></img>
      <div className="gugi">{props.name}</div>
    </div>
  );
} // 상단 <CAPSULE ARCHIVING> 부분

const leftdays = () => {
  const today = dayjs();
  const endOfYear = dayjs().endOf("year");
  const daysLeft = endOfYear.diff(today, "day");
  if (daysLeft === 0) {
    return "DAY";
  } else {
    return daysLeft;
  }
}; // 오늘부터 2024년 12월 31일까지의 남은 날짜 계산기. 디데이가 되면 <D-DAY>로 표시함

export default Capsulearchiving;
