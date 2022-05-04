import Toggle from "../Toggle";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Rocky</div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-menu">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Protfolio</li>
            <li>About</li>
          </ul>
        </div>
        <button className="btn n-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
