import { useContext } from "react";
import { ThemeContext } from "../../Context";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Toggle.css";
const Toggle = () => {
  const {
    state: { darkMode },
    dispatch
  } = useContext(ThemeContext);
  const onToggleDarkMode = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div
      className="toggle_btn"
      onClick={onToggleDarkMode}
      style={{ justifyContent: darkMode ? "flex-end" : "flex-start" }}
    >
      {darkMode ? <FaMoon /> : <FaSun />}

      <div
        className="btn_round"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
