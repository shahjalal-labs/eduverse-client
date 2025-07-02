import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";

const RootLayout = () => {
  return (
    <>
      <div className="bg-base-200 navbar bg-base-100 shadow-sm z-10 sticky top-[1px]">
        <Navbar />
      </div>
      <div className="max-container ">
        {/* <NavbarDrawer />  */}
        <div className="min-h-[60vh] sm:px-3 px-2">
          <Outlet />
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default RootLayout;
