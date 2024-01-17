import image13 from "./images/image-13.png";
import image12 from "./images/image-12.png";
import image15 from "./images/image-15.png";
import instagram from "./images/instagram.svg";
import ellipse from "./images/ellipse.png";

import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div id="page-comingsoon">
      <img src={image13} id="image-13-comingsoon" alt="capsule-1" />
      <img src={image12} id="image-12-comingsoon" alt="capsule-2" />
      <img src={image15} id="image-15-comingsoon" alt="capsule-3" />
      <img src={ellipse} id="ellipse-comingsoon" alt="ellipse" />
      <div id="content-comingsoon">
        <div id="description-comingsoon">1년 뒤 나에게 보내는 선물,</div>
        <div id="title-comingsoon">
          TIME
          <br />
          CAPSULE
        </div>
        <div id="date-comingsoon">2024.01.</div>
        <div id="coming-soon-comingsoon">
          COMING
          <br />
          SOON
        </div>
      </div>
      <div id="footer-comingsoon">
        <div id="MadeBy-comingsoon">Made by GDSC Korea Univ.</div>
        <div id="link-comingsoon">
          <div className="instagram-div-comingsoon">
            <a
              href="https://www.instagram.com/gdsc.koreauniv/"
              id="insta-link-comingsoon"
            >
              <img src={instagram} id="instagram-comingsoon" alt="instagram" />
              <div style={{ width: "2px" }}></div>
              GDSC.koreauniv
            </a>
          </div>
          <div style={{ width: "10px" }}></div>
          <div className="instagram-div-comingsoon">
            <a
              href="https://www.instagram.com/gdscku.project/"
              id="insta-link-comingsoon"
            >
              <img src={instagram} id="instagram-comingsoon" alt="instagram" />
              <div style={{ width: "2px" }}></div>
              GDSCKU.project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
