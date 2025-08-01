import Brand from "../../ui/Brand";
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

export default NavbarStart;
