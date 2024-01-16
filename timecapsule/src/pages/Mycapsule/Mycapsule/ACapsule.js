import "./ACapsule.css";

import goalsCapsuleImg from "./img2/goalsCapsuleImg.svg";
import letterCapsuleImg from "./img2/letterCapsuleImg.svg";
import memoryCapsuleImg from "./img2/memoryCapsuleImg.svg";

const ACapsule = ({ title = "새해화이팅", type = "goals", onClick }) => {
  return (
    <div className="ACapsuleContainer">
      <img
        onClick={onClick}
        className="myCapsuleImg"
        src={
          type === "goals"
            ? goalsCapsuleImg
            : type === "letter"
            ? letterCapsuleImg
            : memoryCapsuleImg
        }
        alt="capsuleImg"
      />
      <div className="acapsule-title">{title}</div>
    </div>
  );
};

export default ACapsule;
