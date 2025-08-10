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

import Brand from "../../ui/Brand";
import navbarLinks from "../navbarLinksConstant";

const NavbarStart = () => {
  return (
    <div className="navbar-start">
      <div className="dropdown dropdown-right dropdown-hover relative">
        {/* Hamburger icon: show only on max-lg */}
        <div
          tabIndex={0}
          role="button"
          className="cursor-pointer p-2 rounded-md text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 lg:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 drop-shadow-[0_0_4px_rgba(129,140,248,0.7)] transition-shadow duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        {/* Dropdown menu */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content z-20 p-3 mt-6 min-w-[170px] rounded-lg bg-gradient-to-br from-[#121629] via-[#1a1f4d] to-[#0f122b] backdrop-blur-md shadow-lg border border-indigo-700"
        >
          {navbarLinks()}
        </ul>
      </div>

      <Brand />
    </div>
  );
};

export default NavbarStart;
