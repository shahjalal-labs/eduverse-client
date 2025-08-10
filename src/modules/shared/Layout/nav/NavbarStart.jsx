/* import Brand from "../../ui/Brand";
import navbarLinks from "../navbarLinksConstant";

const NavbarStart = () => {
  return (
    <div className="navbar-start">
      <div className="dropdown dropdown-right dropdown-hover ">
        <div tabIndex={0} role="button" className=" lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  p-2 shadow mt-6 min-w-[170px]"
        >
          {navbarLinks()}
        </ul>
      </div>
      <Brand />
    </div>
  );
};

export default NavbarStart; */

import { motion } from "framer-motion";
import Brand from "../../ui/Brand";
import navbarLinks from "../navbarLinksConstant";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const iconVariants = {
  rest: { filter: "drop-shadow(0 0 0 rgba(203,67,255,0))" },
  hover: { filter: "drop-shadow(0 0 6px rgba(203,67,255,0.8))", scale: 1.1 },
};

const NavbarStart = () => {
  return (
    <div className="navbar-start">
      <div className="dropdown dropdown-right dropdown-hover relative">
        <motion.div
          tabIndex={0}
          role="button"
          className="lg:hidden cursor-pointer p-2 rounded-md text-purple-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          initial="rest"
          whileHover="hover"
          whileFocus="hover"
          animate="rest"
          variants={iconVariants}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </motion.div>
        <motion.ul
          tabIndex={0}
          className="menu menu-sm dropdown-content z-20 p-2 mt-6 min-w-[170px] rounded-lg bg-[#1a1a40]/80 backdrop-blur-md shadow-lg border border-purple-700"
          initial="hidden"
          whileHover="visible"
          variants={dropdownVariants}
          aria-label="Navigation menu"
        >
          {navbarLinks()}
        </motion.ul>
      </div>
      <Brand />
    </div>
  );
};

export default NavbarStart;
