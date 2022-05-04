import { createContext, useReducer } from "react";
export const ThemeContext = createContext();

const initialState = { darkMode: true };
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
