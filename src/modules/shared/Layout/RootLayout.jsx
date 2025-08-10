import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";

const RootLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e1e2f] via-[#2b2b45] to-[#1e1e2f] shadow-sm z-10 sticky top-[1px]">
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
