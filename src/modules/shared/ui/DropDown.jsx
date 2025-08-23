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
    <div className="dropdown w-fit dropdown-end relative">
      <div
        tabIndex={0}
        role="button"
        className="bt m-1"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {children}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-gradient-to-br from-[#121629]/90 via-[#1a1f4d]/80 to-[#0f122b]/90 rounded-lg z-30 min-w-[225px] py-4 px-2 shadow-lg backdrop-blur-md border border-indigo-700"
      >
        {links.map((link) => (
          <li
            key={link.path}
            className="transition-colors duration-200 hover:text-cyan-400 focus:text-cyan-400 cursor-pointer"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}

        {/* <li className="mt-2 flex justify-center">
          <button
            onClick={() => {
              themeSwither();
              setThemeLight(!themeLight);
            }}
            className={`flex items-center gap-3 px-5 py-2 rounded-full cursor-pointer font-semibold transition-all duration-300
              ${
                themeLight
                  ? "bg-indigo-700 border border-indigo-500 text-cyan-300 hover:bg-cyan-400 hover:text-indigo-900 shadow-[0_0_15px_#22d3ee]"
                  : "bg-cyan-400 border border-cyan-500 text-indigo-900 hover:bg-indigo-700 hover:text-cyan-300 shadow-[0_0_15px_#22d3ee]"
              }`}
            aria-label={
              themeLight ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
          >
            {!themeLight ? (
              <>
                <Sun className="w-5 h-5" />
                Light
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                Dark
              </>
            )}
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default DropDown;

// import { Link } from "react-router";
// import { themeSwither } from "../../../utils/themeSwither";
// import { useState } from "react";
// import { Moon, Sun } from "lucide-react";
//
// const links = [
//   {
//     path: "assignments/create",
//     name: "Create Assignment",
//   },
//   {
//     path: "assignment/my-submit",
//     name: "My Submitted Assignments",
//   },
// ];
//
// const DropDown = ({ children }) => {
//   const [themeLight, setThemeLight] = useState(true);
//
//   return (
//     <div className="dropdown  w-fit dropdown-end ">
//       <div tabIndex={0} role="button" className="bt m-1">
//         {children}
//         {/* <Avatar /> */}
//       </div>
//       <ul
//         tabIndex={0}
//         className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-[225px] py-4 px-[1px] shadow-sm "
//       >
//         {links.map((link) => (
//           <li key={link.path}>
//             <Link to={link.path}>{link.name}</Link>
//           </li>
//         ))}
//
//         <button
//           onClick={() => {
//             themeSwither();
//             setThemeLight(!themeLight);
//           }}
//           className={`border ml-[-8px] mt-2 px-4 py-1 rounded-full cursor-pointer  text-white scale-85
//             ${themeLight ? "bg-gray-400 border" : " bg-black border"}
// `}
//         >
//           {!themeLight ? (
//             <span className="flex items-center gap-3 text-lg font-semibold ">
//               <Sun />
//               Light
//             </span>
//           ) : (
//             <span className="flex items-center gap-3 text-lg font-semibold">
//               <Moon />
//               Dark
//             </span>
//           )}
//         </button>
//       </ul>
//     </div>
//   );
// };
//
// export default DropDown;
