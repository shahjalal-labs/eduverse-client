import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
const NavbarLinks = () => {
  const { user } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Assignments", path: "/assignments" },
    { name: "About Us", path: "/about-us" },
    // Conditionally add this only if user exists
    ...(user
      ? [{ name: "Pending Assignments", path: "/assignments/pending" }]
      : []),
  ];

  return (
    <>
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className="hover:text-primary transition-colors duration-200"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarLinks;
