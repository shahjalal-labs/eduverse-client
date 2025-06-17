import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    try {
      // Sign out from Firebase
      await signoutUser();

      //  call backend to clear JWT cookie
      // await fetch(`http://localhost:5000/api/v1/auth/logout`, {
      await fetch(`https://server-edu-verse.vercel.app/api/v1/auth/logout`, {
        method: "POST",
        credentials: "include", // ensures cookies are sent
      });

      // Show feedback
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signed out successfully!",
        text: "You have been logged out",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.error("Logout error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong during sign out!",
      });
    }
  };

  return (
    <div onClick={handleSignout}>
      {children || <button className="btn">Sign Out</button>}
    </div>
  );
};

export default Signout;

/* import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    await signoutUser();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Sign out Success!",
      text: "You have successfully signed out",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div onClick={handleSignout}>
      {children || <button className="btn">Sign Out</button>}
    </div>
  );
};

export default Signout; */
