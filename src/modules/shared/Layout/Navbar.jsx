import { motion } from "framer-motion";
import { Link } from "react-router";
import { topToBottom } from "../../../animation/motion";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";
import Avatar from "../ui/Avatar";
import navbarLinks from "./navbarLinksConstant";
import DropDown from "../ui/DropDown";
import NavbarStart from "./nav/NavbarStart";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <motion.nav
      className="navbar max-container bg-gradient-to-r from-[#1e1e2f] via-[#2b2b45] to-[#1e1e2f]  sticky top-0 z-50 backdrop-blur-sm"
      {...topToBottom}
    >
      <NavbarStart />

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarLinks()}</ul>
      </div>

      {/* <div className="navbar-end flex items-center gap-5">
        {user ? (
          <>
            <DropDown>
              <Avatar className="ring-2 ring-[#4fd1ff] hover:ring-[#7ed8ff] transition-all duration-500 animate-pulse" />
            </DropDown>
            <Signout>
              <button
                className="btn btn-outline text-[#4fd1ff] border-[#4fd1ff] hover:bg-[#4fd1ff] hover:text-[#121426] transition-all duration-300 shadow-[0_0_10px_#4fd1ff]"
                aria-label="Sign Out"
              >
                Sign Out
              </button>
            </Signout>
          </>
        ) : (
          <Link
            to="/auth/signin"
            className="btn btn-outline text-[#4fd1ff] border-[#4fd1ff] hover:bg-[#4fd1ff] hover:text-[#121426] transition-all duration-300 shadow-[0_0_10px_#4fd1ff]"
            aria-label="Sign In"
          >
            Sign In
          </Link>
        )}
      </div> */}
      <div className="navbar-end flex items-center gap-5">
        {user ? (
          <>
            <DropDown>
              <Avatar className="ring-2 ring-cyan-400/70 hover:ring-cyan-300/90 transition-all duration-700 animate-pulse" />
            </DropDown>
            <Signout>
              <button
                className="btn btn-outline text-cyan-400 border-cyan-400 bg-indigo-900/30 hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300 shadow-[0_0_15px_#22d3ee]"
                aria-label="Sign Out"
              >
                Sign Out
              </button>
            </Signout>
          </>
        ) : (
          <Link
            to="/auth/signin"
            className="btn btn-outline text-cyan-400 border-cyan-400 bg-indigo-900/30 hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300 shadow-[0_0_15px_#22d3ee]"
            aria-label="Sign In"
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
