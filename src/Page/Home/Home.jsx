import { useContext } from "react";
import { themeContext } from "../../context/color";

export default function Home() {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div>
      <br />
      <br />
      Home
      <br />
      <br />
      the theme is {theme}
      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
}
