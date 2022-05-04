import Card from "../Card";
import heartemoji from "../../Asset/img/heartemoji.png";
import humble from "../../Asset/img/humble.png";
import glasses from "../../Asset/img/glasses.png";
import "./services.css";
const Services = () => {
  return (
    <div className="service_wrapper">
      <div className="service_left">
        <span className="">Awesome</span>
        <span className="">services</span>
        <span className="">if you smell...what the rock is cooking</span>
        <button className="btn download_btn">My Resume</button>
      </div>
      <div className="cards_container">
        <div className="card">
          <Card
            img={heartemoji}
            heading={"React Js"}
            detail={"Hooks, Styled Component, Bootstrap, Aggrid, redux"}
          />
        </div>
        <div className="card">
          <Card
            img={humble}
            heading={"Web Dev"}
            detail={"HTML, CSS, Java Script , SASS, SCSS"}
          />
        </div>
        <div className="card">
          <Card
            img={glasses}
            heading={"Back End"}
            detail={"Node JS, Express, MongoDB, JWT, Encrypt"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
