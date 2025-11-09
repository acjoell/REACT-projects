import { RouterProvider } from "react-router-dom"
import { AppRoutes } from "../../routes"
import { ShoppingCartProvider } from "../../context";
import "./App.css"

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <RouterProvider router={AppRoutes} />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
