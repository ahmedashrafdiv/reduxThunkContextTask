import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Page/Home/Home";
import Products from "./Page/Products/Products";
import ProductDetails from "./Page/Products/ProductDetails";
import { Provider } from "react-redux";
import Store from "./Store/store";
import { ThemeProvider } from "./context/color/";
import { useEffect, useState } from "react";
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const html = document.querySelector("html");
    const root = document.querySelector("#root");

    const color = theme === "light" ? "black" : "white";
    const backgroundColor = theme === "light" ? "white" : "#282323";

    html.style.color = color;
    root.style.color = color;
    html.style.backgroundColor = backgroundColor;
    root.style.backgroundColor = backgroundColor;
  }, [theme]);

  return (
    <div className="container">
      <ThemeProvider value={{ theme, setTheme }}>
        <Provider store={Store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
export default App;
