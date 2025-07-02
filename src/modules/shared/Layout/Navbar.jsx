import { motion } from "motion/react";
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
      className="navbar bg-base-100 shadow-sm z-10 sticky top-[1px]"
      {...topToBottom}
    >
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

export default Navbar;
