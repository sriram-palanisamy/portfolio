import { useContext } from "react";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services";
import { ThemeContext } from "./Context.js";
import "./App.css";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "black" : "",
        color: darkMode ? "#fff" : ""
      }}
    >
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
