import { Link } from "react-router";
import { themeSwither } from "../../../utils/themeSwither";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  {
    path: "assignments/create",
    name: "Create Assignment",
  },
  {
    path: "assignment/my-submit",
    name: "My Submitted Assignments",
  },
];

const DropDown = ({ children }) => {
  const [themeLight, setThemeLight] = useState(true);

  return (
    <div className="dropdown  w-fit dropdown-end ">
      <div tabIndex={0} role="button" className="bt m-1">
        {children}
        {/* <Avatar /> */}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-[225px] py-4 px-[1px] shadow-sm "
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <button
          onClick={() => {
            themeSwither();
            setThemeLight(!themeLight);
          }}
          className={`border ml-[-8px] px-4 py-1 rounded-full  text-white scale-85 
            ${themeLight ? "bg-black border" : "bg-gray-400 border"}
`}
        >
          {themeLight ? (
            <span className="flex items-center gap-3 text-lg font-semibold ">
              <Sun />
              Light
            </span>
          ) : (
            <span className="flex items-center gap-3 text-lg font-semibold">
              <Moon />
              Dark
            </span>
          )}
        </button>
      </ul>
    </div>
  );
};

export default DropDown;
