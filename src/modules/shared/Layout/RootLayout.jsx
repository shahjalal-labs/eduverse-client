import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";

const RootLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e1e2f]/80 via-[#2b2b45]/80 to-[#1e1e2f]/80 backdrop-blur-md shadow-sm z-50 sticky top-0">
        <Navbar />
      </div>
      <div className="max-container ">
        {/* <NavbarDrawer />  */}
        <div className="min-h-[60vh] sm:px-3 px-2">
          <Outlet />
        </div>
      </div>
      <div className="bg-[#0f111a] border-t border-green-900">
        <CommonFooter />
      </div>
    </>
  );
};

export default RootLayout;
