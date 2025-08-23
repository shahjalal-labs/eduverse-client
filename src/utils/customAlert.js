import Swal from "sweetalert2";

const customAlert = ({
  title = "Success!",
  text = "You have successfully Submitted!",
  icon = "success",
  timer = 1500,
  showConfirmButton = false,
  showCloseButton = false,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton,
    timer,
    showCloseButton,
    timerProgressBar: true,
    background: "#1e1e2f", // dark background
    color: "#f3f4f6", // light text
    iconColor: icon === "success" ? "#4ade80" : "#f87171", // green for success, red for error
    customClass: {
      popup: "rounded-2xl shadow-2xl",
      title: "text-lg font-semibold tracking-wide",
      htmlContainer: "text-sm opacity-80",
      timerProgressBar: "h-1 bg-indigo-500 rounded",
    },
  });
};

export default customAlert;

