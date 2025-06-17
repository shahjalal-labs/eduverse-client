import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";
import NavbarDrawer from "./NavbarDrawer";

const RootLayout = () => {
  return (
    <div className="max-container ">
      <Navbar />
      {/* <NavbarDrawer />  */}
      <div className="min-h-[60vh] sm:px-3 px-1">
        <Outlet />
      </div>
      <CommonFooter />
    </div>
  );
};

export default RootLayout;
