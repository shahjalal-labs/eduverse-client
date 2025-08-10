/* import { Link } from "react-router";
import FooterSocialIcons from "./FooterSocialIcons";

const CommonFooter = () => {
  return (
    <div className="max-container">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content py-10 px-5">
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about-us" className="link link-hover">
            About us
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact
          </Link>
          <Link to="/assignments" className="link link-hover">
            Assignments
          </Link>
          <Link to="/" className="link link-hover">
            Home
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms-condition" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
          <Link
            target="_blank"
            to="https://github.com/shahjalal-labs/eduverse-client"
            rel="noreferrer"
          >
            Source code
          </Link>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            EduVerse
            <br />
            Sharpen the learning experience!!!
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <FooterSocialIcons />
        </nav>
      </footer>
    </div>
  );
};

export default CommonFooter; */

import { Link } from "react-router-dom";
import FooterSocialIcons from "./FooterSocialIcons";
import { motion } from "framer-motion";

const glowPulse = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  whileHover: {
    scale: 1.05,
    textShadow:
      "0 0 6px #4ade80, 0 0 10px #22c55e, 0 0 20px #16a34a, 0 0 40px #15803d",
    transition: { duration: 0.3, yoyo: Infinity },
  },
};

const CommonFooter = () => {
  return (
    <div className="max-container bg-black text-green-400 select-none">
      <footer className="footer sm:footer-horizontal bg-[#0f111a] border-t border-green-900 text-green-400 py-12 px-8 rounded-lg shadow-lg shadow-green-900/50">
        <motion.nav
          className="flex flex-col gap-3"
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          variants={glowPulse}
        >
          <h6 className="footer-title text-green-300 text-lg font-semibold mb-2 tracking-wide">
            Company
          </h6>
          {[
            { name: "About us", path: "/about-us" },
            { name: "Contact", path: "/contact-us" },
            { name: "Assignments", path: "/assignments" },
            { name: "Home", path: "/" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="link link-hover hover:text-green-200 transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
        </motion.nav>

        <motion.nav
          className="flex flex-col gap-3"
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          variants={glowPulse}
        >
          <h6 className="footer-title text-green-300 text-lg font-semibold mb-2 tracking-wide">
            Legal
          </h6>
          {[
            { name: "Terms of use", path: "/terms-condition" },
            { name: "Privacy policy", path: "/privacy-policy" },
            { name: "Cookie policy", path: "/cookie-policy" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="link link-hover hover:text-green-200 transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
          <a
            href="https://github.com/shahjalal-labs/eduverse-client"
            target="_blank"
            rel="noreferrer"
            className="link link-hover hover:text-green-200 transition-colors duration-300"
          >
            Source code
          </a>
        </motion.nav>
      </footer>

      <footer className="footer bg-[#0a0c12] text-green-400 border-t border-green-900 px-10 py-6 rounded-b-lg shadow-inner shadow-green-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <aside className="flex items-center gap-4">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:animate-pulse"
          >
            <path d="M12 2L15 8l6 1-4.5 4.5L17 21l-5-3-5 3 1.5-7.5L2 9l6-1 3-6z" />
          </motion.svg>
          <motion.p
            className="font-mono text-sm leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            EduVerse <br />
            <span className="text-green-300">
              Sharpen the learning experience!!!
            </span>
          </motion.p>
        </aside>

        <nav>
          <FooterSocialIcons />
        </nav>
      </footer>
    </div>
  );
};

export default CommonFooter;
