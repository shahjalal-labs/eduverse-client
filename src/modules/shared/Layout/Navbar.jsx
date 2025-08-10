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
// import { motion } from "motion/react";
// import { Link } from "react-router";
// import { topToBottom } from "../../../animation/motion";
// import useAuth from "../../../hooks/useAuth";
// import Signout from "../../Auth/components/Signout";
// import Avatar from "../ui/Avatar";
// import navbarLinks from "./navbarLinksConstant";
// import DropDown from "../ui/DropDown";
// import NavbarStart from "./nav/NavbarStart";
//
// const Navbar = () => {
//   const { user } = useAuth();
//
//   return (
//     <motion.nav
//       className="navbar max-container relative bg-gradient-to-r from-gray-900 via-gray-800 to-black backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] group hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500"
//       {...topToBottom}
//     >
//       {/* Animated top glow line */}
//       <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 to-transparent animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
//
//       {/* CLI terminal prompt */}
//       <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 font-mono text-sm opacity-70 animate-pulse">
//         <span className="text-emerald-400">eduverse</span>
//         <span className="text-gray-500">@</span>
//         <span className="text-blue-400">terminal</span>
//         <span className="text-gray-400">:~$</span>
//       </div>
//
//       <div className="ml-32">
//         <NavbarStart />
//       </div>
//
//       <div className="navbar-center hidden lg:flex">
//         <motion.ul
//           className="menu menu-horizontal px-1 space-x-1"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, staggerChildren: 0.1 }}
//         >
//           {navbarLinks()}
//         </motion.ul>
//       </div>
//
//       <div className="navbar-end">
//         {user ? (
//           <motion.div
//             className="flex items-center gap-4"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             {/* Status indicator */}
//             <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
//               <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
//               <span className="text-emerald-400 text-xs font-mono font-semibold">
//                 ONLINE
//               </span>
//             </div>
//
//             <DropDown>
//               <div className="relative group/avatar cursor-pointer">
//                 {/* Rotating ring effect */}
//                 <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full opacity-40 group-hover/avatar:opacity-70 animate-spin-slow blur-sm transition-opacity duration-300" />
//                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60 group-hover/avatar:opacity-90 animate-pulse transition-opacity duration-300" />
//
//                 {/* Avatar */}
//                 <div className="relative transform group-hover/avatar:scale-110 transition-transform duration-300">
//                   <Avatar />
//                 </div>
//
//                 {/* Floating particles around avatar */}
//                 <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-[0.5s] opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300" />
//               </div>
//             </DropDown>
//
//             <Signout>
//               <motion.button
//                 className="relative px-5 py-2 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-700/20 border border-red-500/50 rounded-lg text-red-400 font-mono font-semibold text-sm overflow-hidden group/btn hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 hover:border-red-400/70"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Animated warning sweep */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-400/30 to-red-500/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-600" />
//
//                 <span className="relative flex items-center gap-2">
//                   <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-[0_0_4px_rgba(239,68,68,0.8)]" />
//                   LOGOUT
//                   <span className="text-red-300 animate-pulse">|</span>
//                 </span>
//
//                 {/* Danger indicators */}
//                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-50 group-hover/btn:opacity-80" />
//               </motion.button>
//             </Signout>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link
//               to="/auth/signin"
//               className="relative px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 border border-cyan-500/60 rounded-lg text-cyan-400 font-mono font-bold text-sm overflow-hidden group/signin hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:border-cyan-400/80 transition-all duration-300"
//             >
//               {/* Animated login sweep */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 via-blue-400/20 to-violet-400/20 translate-x-[-200%] group-hover/signin:translate-x-[200%] transition-transform duration-700" />
//
//               <span className="relative flex items-center gap-2">
//                 <span className="text-emerald-400 animate-pulse">$</span>
//                 <span>SIGNIN</span>
//                 <span className="text-blue-300 animate-pulse">|</span>
//               </span>
//
//               {/* Access granted indicators */}
//               <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40 group-hover/signin:opacity-80" />
//               <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
//
//               {/* Side glow bars */}
//               <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-cyan-400 to-blue-400 group-hover/signin:h-full transition-all duration-300 rounded-full" />
//               <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-blue-400 to-violet-400 group-hover/signin:h-full transition-all duration-300 rounded-full" />
//             </Link>
//           </motion.div>
//         )}
//       </div>
//
//       {/* Bottom animated glow line */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 via-violet-500 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
//
//       {/* Floating matrix-style particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"
//             animate={{
//               x: [0, 150, 300],
//               y: [0, -30, 0],
//               opacity: [0, 1, 0],
//               scale: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 6 + i,
//               repeat: Infinity,
//               delay: i * 1.2,
//               ease: "easeInOut",
//             }}
//             style={{
//               left: `${10 + i * 20}%`,
//               top: "50%",
//             }}
//           />
//         ))}
//       </div>
//
//       {/* Scanning line effect */}
//       <motion.div
//         className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20"
//         animate={{
//           x: [0, "100vw"],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />
//     </motion.nav>
//   );
// };
//
// export default Navbar;

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
      className="navbar max-container relative bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500 rounded-lg group"
      {...topToBottom}
    >
      {/* Animated glow lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-violet-500 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

      {/* Enhanced NavbarStart with glow */}
      <div className="relative">
        <NavbarStart />
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 relative">
          {/* Enhanced navigation links with individual hover effects */}
          <div className="flex space-x-2">{navbarLinks()}</div>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <DropDown>
                <div className="relative group/avatar">
                  {/* Avatar glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-40 group-hover/avatar:opacity-70 animate-pulse transition-opacity duration-300 blur-sm" />
                  <div className="relative transform group-hover/avatar:scale-110 transition-transform duration-300">
                    <Avatar />
                  </div>
                  {/* Corner particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover/avatar:opacity-100 animate-ping transition-opacity duration-300" />
                </div>
              </DropDown>

              <Signout>
                <button className="btn btn-soft btn-primary relative overflow-hidden group/signout bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-500/50 text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:border-red-400/70 transition-all duration-300">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-400/30 to-red-500/0 translate-x-[-100%] group-hover/signout:translate-x-[100%] transition-transform duration-500" />

                  <span className="relative flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    Sign Out
                  </span>
                </button>
              </Signout>
            </div>
          </>
        ) : (
          <Link
            to="/auth/signin"
            className="btn relative overflow-hidden group/signin bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/60 text-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-400/80 transition-all duration-300"
          >
            {/* Animated sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-blue-400/0 translate-x-[-100%] group-hover/signin:translate-x-[100%] transition-transform duration-600" />

            <span className="relative flex items-center gap-2">
              <span className="text-emerald-400">$</span>
              Sign In
              <span className="animate-pulse">|</span>
            </span>

            {/* Corner glow */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover/signin:opacity-100 animate-ping transition-opacity duration-300" />
          </Link>
        )}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 200],
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: "50%",
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
