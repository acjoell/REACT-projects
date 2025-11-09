import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Category } from "../pages/Categories";
import { MyAccount } from "../pages/MyAccount";
import { MyOrder } from "../pages/MyOrder";
import { MyOrders } from "../pages/MyOrders";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { RootLayout } from "../layouts/RootLayout.jsx";

export const AppRoutes = createBrowserRouter([
  {
    element: <RootLayout />, // 👈 layout principal
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <Category /> },
      { path: "/my-account", element: <MyAccount /> },
      { path: "/my-order", element: <MyOrder /> },
      { path: "/my-orders", element: <MyOrders /> },
      { path: "/my-orders/:orderId", element: <MyOrder /> },
      { path: "/my-orders/last", element: <MyOrder /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
