import "./LoadingCircle.css";
import loadingCircleImg from "./img/loadingCircle.png";
import loadingPillImg from "./img/loadingPill.png";
const LoadingCircle = () => {
  return (
    <div className="loading-circle-container">
      <div>
        <img
          className="loadingCircleImg"
          src={loadingCircleImg}
          alt="loadingCircleImg"
        />
        <img
          className="loadingPillImg"
          src={loadingPillImg}
          alt="loadingPillImg"
        />
      </div>
    </div>
  );
};

export default LoadingCircle;
