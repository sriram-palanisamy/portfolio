import "./intro.css";
import Github from "../../Asset/img/github.png";
import linkedin from "../../Asset/img/linkedin.png";
import instagram from "../../Asset/img/instagram.png";
import Vector1 from "../../Asset/img/Vector1.png";
import Vector2 from "../../Asset/img/Vector2.png";
import boy from "../../Asset/img/boy.png";
import thumbup from "../../Asset/img/thumbup.png";
import glassesimoji from "../../Asset/img/glassesimoji.png";
import crown from "../../Asset/img/crown.png";

import FloatingDiv from "../FloatingDiv";
const Intro = () => {
  return (
    <div className="i_wrapper">
      <div className="i_left">
        <div className="i_name">
          <span>Hey I'am </span>
          <span>Rocky!!!</span>
          <span>
            React developer with high level of experience in web developemetn
            and create resuable component and prodtcting awuality work and
            privides plessant user experience
          </span>
        </div>
        <button className="btn i_btn">Hire Me</button>
        <div className="i_icon_grp">
          <img src={Github} alt="Github" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
      <div className="i_right">
        {" "}
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector12" />
        <img src={boy} alt="boy" />
        <img src={glassesimoji} alt="glassesimoji" />
        <div className="floating_container_1">
          <FloatingDiv image={crown} txt1={"Web"} txt2="Developer" />
          <div className="blur_effect top_right"></div>
        </div>
        <div className="floating_container_2">
          <FloatingDiv image={thumbup} txt1={"Best"} txt2="Design" />
          <div className="blur_effect bottom_right"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
