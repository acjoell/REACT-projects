import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/index.jsx";
import { CheckoutSideMenu } from "../components/CheckoutSideMenu/index.jsx";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <CheckoutSideMenu />
      <main className="mt-16 2xl:mt-20">
        <Outlet />
      </main>
    </>
  );
};
