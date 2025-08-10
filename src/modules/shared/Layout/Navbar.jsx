/* import { motion } from "motion/react";
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
    <motion.nav className="navbar  max-container" {...topToBottom}>
      <NavbarStart />
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarLinks()}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <DropDown>
                <Avatar />
              </DropDown>
              <Signout>
                <button className="btn btn-soft btn-primary">Sign Out</button>
              </Signout>
            </div>
          </>
        ) : (
          <Link to="/auth/signin" className="btn">
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; */

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
      className="
        navbar
        max-container
        bg-gradient-to-r from-[#0a0a1f] via-[#1c1c3a] to-[#0a0a1f]
        border-b border-purple-700/40
        backdrop-blur-sm
        sticky top-0 z-50
        px-6 py-0
        flex items-center justify-between
        shadow-[0_0_8px_rgba(168,85,247,0.3)]
      "
      {...topToBottom}
      style={{ marginTop: 0, marginBottom: 0 }} // ensure no vertical margin from motion
    >
      <NavbarStart />

      <div className="navbar-center hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 text-gray-300 space-x-8">
          {navbarLinks()}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
            <DropDown>
              <Avatar
                className="
                  border border-purple-600
                  hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]
                  transition-shadow duration-300
                  rounded-full
                  cursor-pointer
                "
              />
            </DropDown>
            <Signout>
              <button
                className="
                  btn btn-primary btn-soft
                  bg-gradient-to-r from-purple-700 to-purple-900
                  hover:from-purple-800 hover:to-purple-950
                  text-white
                  shadow-sm
                  rounded-full
                  px-5 py-2
                  transition
                  duration-300
                "
              >
                Sign Out
              </button>
            </Signout>
          </>
        ) : (
          <Link
            to="/auth/signin"
            className="
              btn
              bg-gradient-to-r from-purple-700 to-purple-900
              hover:from-purple-800 hover:to-purple-950
              text-white
              shadow-sm
              rounded-full
              px-5 py-2
              transition
              duration-300
            "
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
