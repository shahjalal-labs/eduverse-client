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
        background: "#1e1e2f", // dark background
        color: "#f1f1f1", // text color
        iconColor: "#4ade80", // success green
        customClass: {
          popup: "rounded-2xl shadow-2xl",
          title: "text-lg font-semibold tracking-wide",
          htmlContainer: "text-sm opacity-80",
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong during sign out!",
        background: "#1e1e2f", // dark mode
        color: "#f1f1f1",
        iconColor: "#f87171", // soft red
        confirmButtonColor: "#6366f1", // indigo confirm
        customClass: {
          popup: "rounded-2xl shadow-2xl",
          title: "text-lg font-semibold tracking-wide",
          htmlContainer: "text-sm opacity-80",
          confirmButton: "px-5 py-2 rounded-xl text-sm",
        },
      });
    }
  };

  return (
    <div onClick={handleSignout}>
      {children || <button className="btn rounded-full">Sign Out</button>}
    </div>
  );
};

export default Signout;
