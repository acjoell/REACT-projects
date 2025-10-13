import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// Distribuidor / Proveedor
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`${theme === "light" ? "text-indigo-800" : "text-indigo-200"}`}
    >
      Cambiar tema
    </button>
  );
};
