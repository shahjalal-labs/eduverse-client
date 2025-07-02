import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Assignments",
    path: "/assignments",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Pending Assignments",
    path: "/assignments/pending",
  },
];

const navbarLinks = () => {
  const user = useAuth(AuthContext);
  return navItems.map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
};

export default navbarLinks;
